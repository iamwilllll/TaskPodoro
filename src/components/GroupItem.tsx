import { useNavigate } from 'react-router';
import { useGroup } from '../hooks/useGroup';
import type { GroupsT } from '../types';

import ElipsisMenu from './ElipsisMenu';

type GroupItemProps = {
    group: GroupsT;
    className?: string;
    isGroupPage?: boolean;
};

const pseudoCircleClasses: string[] = [
    "before:bg-secondary-600 before:absolute before:-top-30 before:-left-30 before:size-[200px] before:rounded-full before:content-[''] z-1",
    "after:bg-secondary-600 after:absolute after:-bottom-30 after:-right-30 after:size-[200px] after:rounded-full after:content-['']",
];

function GroupItem({ className, group, isGroupPage }: GroupItemProps) {
    const { name, description, icon, id } = group;
    let groupIcon = '/default-group-icon.png';

    const navigate = useNavigate();

    const { deleteGroup } = useGroup();

    if (icon) groupIcon = icon;

    const handleClick = () => {
        navigate(`/groups/${name}`, { state: { group } });
    };

    return (
        <div
            onClick={handleClick}
            className={`bg-secondary-500 group relative mb-5 flex h-50 w-full max-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-xl md:h-[250px] md:w-[190px] lg:mb-0 ${pseudoCircleClasses.join(' ')} ${className}`}
        >
            <div className="absolute top-0 hidden w-full items-center justify-end gap-5 px-2 pt-1 group-hover:flex">
                <ElipsisMenu EditFn={() => console.log('id')} deleteFn={() => deleteGroup(id)} />
            </div>

            <div className="z-1 flex flex-col items-center justify-center gap-3 text-white">
                <figure className="size-15 rounded-full p-3 text-white outline-2 outline-white">
                    <img src={groupIcon} alt="Group icon" className="drop-shadow-[0px_0px_25px_white]" />
                </figure>
                <h3
                    className={`m-0 w-35 overflow-hidden text-center text-2xl font-semibold overflow-ellipsis ${isGroupPage && 'w-80'}`}
                >
                    {name}
                </h3>
                <p
                    className={`hidden h-12 w-35 overflow-hidden text-center overflow-ellipsis lg:block ${isGroupPage && 'h-30 w-80 break-words'}`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}

export default GroupItem;
