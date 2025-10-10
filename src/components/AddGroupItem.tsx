import { useState } from 'react';
import AddIcon from '../assets/icons/plus-icon.svg?react';
import AddGroupModal from '../components/AddGroupModal';

type AddGroupItemProps = {
    className?: string;
};

const pseudoCircleClasses: string[] = [
    "before:bg-secondary-500 before:absolute before:-top-25 before:-left-25 before:size-[200px] before:rounded-full before:content-['']",
    "after:bg-secondary-500 after:absolute after:-bottom-25 after:-right-25 after:size-[200px] after:rounded-full after:content-['']",
];

function AddGroupItem({ className }: AddGroupItemProps) {
    const [open, setOpen] = useState(false);

    const handleVisibility = () => setOpen((prev) => !prev);
    const handleClick = () => setOpen(true);

    return (
        <>
            <AddGroupModal visibility={open} handleVisibility={handleVisibility} />
            <div
                className={`bg-secondary-600 relative flex w-full max-w-[300px] items-center justify-center overflow-hidden rounded-xl md:h-[250px] md:w-[190px] ${pseudoCircleClasses.join(' ')} ${className} `}
            >
                <button
                    className="z-1 flex size-full cursor-pointer items-center justify-center transition hover:scale-110"
                    onClick={handleClick}
                >
                    <AddIcon className="text-secondary-500 drop-shadow-[0px_0px_50px_white]" />
                </button>
            </div>
        </>
    );
}

export default AddGroupItem;
