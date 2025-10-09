import { Modal, Box } from '@mui/material';
import CloseIcon from '../assets/icons/close-icon.svg?react';
import { useGroup } from '../hooks/useGroup';

import { useForm } from 'react-hook-form';
import type { GroupsTDraftT } from '../types';

type AddGroupModalProps = {
    handleVisibility: () => void;
    visibility: boolean;
};

function AddGroupModal({ handleVisibility, visibility }: AddGroupModalProps) {
    const { handleSubmit, register, reset } = useForm<GroupsTDraftT>();

    const { createGroups } = useGroup();

    const onSubmit = (data: GroupsTDraftT) => {
        createGroups(data);
        handleVisibility();
        reset();
    };

    return (
        <>
            <Modal open={visibility} onClose={handleVisibility}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
                    <Box
                        className="relative flex flex-col items-center justify-center rounded-xl bg-white p-6 shadow-lg"
                        sx={{
                            width: 1000,
                            maxWidth: '50%',
                            transition: 'transform 0.3s ease, opacity 0.3s ease',
                        }}
                    >
                        <button
                            onClick={handleVisibility}
                            className="hover:text-secondary-500 absolute top-5 right-10 cursor-pointer transition hover:scale-105"
                        >
                            <CloseIcon width={45} height={45} />
                        </button>

                        <form className="flex w-full flex-col gap-4 p-5 pt-10" onSubmit={handleSubmit(onSubmit)}>
                            <fieldset className="flex flex-col gap-2">
                                <label htmlFor="group-name" className="text-sm font-medium text-gray-700">
                                    Group name
                                </label>
                                <input
                                    id="group-name"
                                    type="text"
                                    className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-400 focus:outline-none"
                                    {...register('name', { required: true, maxLength: 20 })}
                                />
                            </fieldset>
                            <fieldset className="flex flex-col gap-2">
                                <label htmlFor="group-description" className="text-sm font-medium text-gray-700">
                                    description
                                </label>
                                <input
                                    id="group-description"
                                    type="text"
                                    className="rounded-md border border-gray-300 px-3 py-2 focus:border-blue-400 focus:outline-none"
                                    {...register('description', { required: true })}
                                />
                            </fieldset>
                            <input type="submit" />
                        </form>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}

export default AddGroupModal;
