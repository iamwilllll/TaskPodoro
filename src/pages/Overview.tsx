import AddGroupItem from '../components/AddGroupItem';
import type { GroupsTDraftT } from '../types';
import { useGroup } from '../hooks/useGroup';
import { useGroupContext } from '../context/store';
import GroupItem from '../components/GroupItem';

function Overview() {
    const { createGroups } = useGroup();
    const { GROUPS, MAX_GROUPS } = useGroupContext();

    const group: GroupsTDraftT = {
        name: 'Homework',
        description:
            'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
        image: 'https://i.pinimg.com/474x/07/c4/72/07c4720d19a9e9edad9d0e939eca304a.jpg',
        tasks: [],
    };

    return (
        <section className="grid grid-cols-1 grid-rows-3 place-items-center gap-5 md:grid-cols-3 lg:grid-cols-4">
            <AddGroupItem className={`${MAX_GROUPS ? 'hidden' : 'grid'}`} addGroup={() => createGroups(group)} />

            {GROUPS.map((group, index) => {
                return <GroupItem key={index} group={group} />;
            })}
        </section>
    );
}

export default Overview;
