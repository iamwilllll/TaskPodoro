import PenIcon from '../assets/icons/pen-icon.svg?react';
import TrashIcon from '../assets/icons/trash-icon.svg?react';
import ElipsisIcon from '../assets/icons/elipsis-icon.svg?react';
import { useState } from 'react';

type ElipsisMenuProps = {
    deleteFn: () => void;
    EditFn: () => void;
};

function ElipsisMenu({ deleteFn, EditFn }: ElipsisMenuProps) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const handleClick = () => setIsVisible((prev) => (prev ? false : true));

    return (
        <>
            <button onClick={handleClick} className="z-3">
                <ElipsisIcon height={30} className="elipsis cursor-pointer text-white transition" />
            </button>

            <ul
                className={`bg-secondary-600 absolute top-0 right-0 z-2 w-full rounded-md px-2 py-2 text-white transition-all duration-300 ${isVisible ? 'translate-y-0' : 'pointer-events-none -translate-y-50'} `}
            >
                <li>
                    <button onClick={EditFn} className="flex cursor-pointer items-center gap-1 text-white hover:text-amber-400">
                        <PenIcon width={25} />
                        Edit
                    </button>
                </li>

                <li>
                    <button onClick={deleteFn} className="flex cursor-pointer items-center gap-1 text-white hover:text-red-500">
                        <TrashIcon width={25} />
                        Delete
                    </button>
                </li>
            </ul>
        </>
    );
}

export default ElipsisMenu;
