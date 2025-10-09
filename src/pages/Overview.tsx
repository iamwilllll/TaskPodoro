import AddGroupItem from '../components/AddGroupItem';

import { useGroupContext } from '../context/store';
import GroupItem from '../components/GroupItem';

function Overview() {
    const { GROUPS, MAX_GROUPS } = useGroupContext();

    return (
        <section className="grid h-full place-items-center md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2">
            {GROUPS.map((group, index) => {
                return <GroupItem key={index} group={group} />;
            })}

            <AddGroupItem className={`${MAX_GROUPS && 'hidden'}`} />
        </section>
    );
}

export default Overview;
