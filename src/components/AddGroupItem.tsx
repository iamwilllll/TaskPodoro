import AddIcon from '../assets/icons/plus-icon.svg?react';

type AddGroupItemProps = {
    className?: string;
};
const pseudoCircleClasses: string[] = [
    "before:bg-secondary-500 before:absolute before:-top-25 before:-left-25 before:size-[200px] before:rounded-full before:border-2 before:border-white before:content-['']",
    "after:bg-secondary-500 after:absolute after:-bottom-25 after:-right-25 after:size-[200px] after:rounded-full after:border-2 after:border-white after:content-['']",
];

function AddGroupItem({ className }: AddGroupItemProps) {
    const handleClick = () => {
        alert('a');
    };

    return (
        <div
            className={`bg-secondary-600 relative flex h-[250px] w-[190px] items-center justify-center overflow-hidden rounded-xl ${pseudoCircleClasses.join(' ')} ${className}`}
        >
            <button
                className="flex size-full cursor-pointer items-center justify-center transition hover:scale-110"
                onClick={handleClick}
            >
                <AddIcon className="text-secondary-500 drop-shadow-[0px_0px_50px_white]" />
            </button>
        </div>
    );
}

export default AddGroupItem;
