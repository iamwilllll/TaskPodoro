import { useGroup } from '../hooks/useGroup';
import type { GroupsT } from '../types';

import ElipsisMenu from './ElipsisMenu';

type GroupItemProps = {
    group: GroupsT;
    className?: string;
};

const pseudoCircleClasses: string[] = [
    "before:bg-secondary-600 before:absolute before:-top-30 before:-left-30 before:size-[200px] before:rounded-full before:content-[''] z-1",
    "after:bg-secondary-600 after:absolute after:-bottom-30 after:-right-30 after:size-[200px] after:rounded-full after:content-['']",
];

function GroupItem({ className, group }: GroupItemProps) {
    const { name, description, icon, id } = group;
    let groupIcon = '/default-group-icon.png';

    const { deleteGroup } = useGroup();

    if (icon) groupIcon = icon;

    return (
        <div
            className={`bg-secondary-500 group relative mb-5 flex h-50 w-full max-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-xl md:h-[250px] md:w-[190px] lg:mb-0 ${pseudoCircleClasses.join(' ')} ${className}`}
        >
            <div className="absolute top-0 hidden w-full items-center justify-end gap-5 px-2 pt-1 group-hover:flex">
                <ElipsisMenu EditFn={() => console.log('id')} deleteFn={() => deleteGroup(id)} />
            </div>

            <div className="z-1 flex flex-col items-center justify-center gap-3 text-white">
                <figure className="size-15 rounded-full p-3 text-white outline-2 outline-white">
                    <img src={groupIcon} alt="Group icon" className="drop-shadow-[0px_0px_25px_white]" />
                </figure>
                <h3 className="m-0 text-2xl font-semibold">{name}</h3>
                <p className="m-0 hidden w-35">{description}</p>
            </div>
        </div>
    );
}

export default GroupItem;
