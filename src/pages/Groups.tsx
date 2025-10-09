import AddGroupItem from '../components/AddGroupItem';
import { useGroupContext } from '../context/store';

function Groups() {
    const { GROUPS, MAX_GROUPS } = useGroupContext();

    return (
        <section className={`h-full w-full gap-5 lg:grid lg:grid-cols-2 lg:grid-rows-2`}>
            {GROUPS.map((group, index) => {
                const { name } = group;

                return (
                    <div key={index} className="bg-red-900">
                        <p>{name}</p>
                    </div>
                );
            })}
            <AddGroupItem className={`${MAX_GROUPS && 'hidden'}`} />
        </section>
    );
}

export default Groups;
