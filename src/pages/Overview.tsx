import AddGroupItem from '../components/AddGroupItem';
import { useGroup } from '../hooks/useGroup';

function Overview() {
    const { addGroup } = useGroup();

    return (
        <section className="grid grid-cols-1 grid-rows-3 place-items-center gap-5 md:grid-cols-3 lg:grid-cols-4">
            <AddGroupItem addGroup={addGroup} />
            <AddGroupItem addGroup={addGroup} />
            <AddGroupItem addGroup={addGroup} />
            <AddGroupItem addGroup={addGroup} />
        </section>
    );
}

export default Overview;
