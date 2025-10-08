import type { GroupsT } from '../types';

type GroupItemProps = {
    group: GroupsT;
    className?: string;
};
const pseudoCircleClasses: string[] = [
    "before:bg-secondary-600 before:absolute before:-top-30 before:-left-30 before:size-[200px] before:rounded-full before:content-[''] z-1",
    "after:bg-secondary-600 after:absolute after:-bottom-30 after:-right-30 after:size-[200px] after:rounded-full after:content-['']",
];

function GroupItem({ className, group }: GroupItemProps) {
    const { name, description, image } = group;

    const handleClick = () => {};

    return (
        <button
            onClick={handleClick}
            className={`bg-secondary-500 relative flex w-full max-w-[300px] h-50 cursor-pointer items-center justify-center overflow-hidden rounded-xl md:h-[250px] md:w-[190px] ${pseudoCircleClasses.join(' ')} ${className}`}
        >
            <div className="z-1 flex flex-col items-center justify-center gap-3 text-white">
                <img
                    src={image}
                    alt="Group image"
                    width={75}
                    className="rounded-full outline-2 outline-white drop-shadow-[0px_0px_50px_white]"
                />
                <h3 className="m-0 text-2xl font-semibold">{name}</h3>
                <p className="m-0 w-35 truncate hidden md:flex ">{description}</p>
            </div>
        </button>
    );
}

export default GroupItem;
