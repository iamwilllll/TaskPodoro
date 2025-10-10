import { useLocation, useParams } from 'react-router';
import type { GroupsT } from '../types';

function GroupLayout() {
    const location = useLocation();
    const { name } = useParams();
    const { group } = location.state as { group: GroupsT };



    return (
        <div>
            {name}
        </div>
    );
}

export default GroupLayout;
