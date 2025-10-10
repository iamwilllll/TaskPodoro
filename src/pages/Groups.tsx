import AddGroupItem from '../components/AddGroupItem';
import GroupItem from '../components/GroupItem';
import { useGroupContext } from '../context/store';

function Groups() {
    const { GROUPS, MAX_GROUPS } = useGroupContext();

    return (
        <section className={`h-full w-full gap-5 lg:grid lg:grid-cols-2 lg:grid-rows-2`}>
            {GROUPS.map((group, index) => (
                <GroupItem
                    key={index}
                    group={group}
                    isGroupPage={true}
                    className="m-auto lg:h-full lg:max-h-none lg:w-full lg:max-w-none"
                />
            ))}

            <AddGroupItem className={`${MAX_GROUPS && 'hidden'} mx-auto lg:h-full lg:max-h-none lg:w-full lg:max-w-none`} />
        </section>
    );
}

export default Groups;
