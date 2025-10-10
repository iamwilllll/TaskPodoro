import { create } from 'zustand';
import type { useGroupContextProps, useNavBarProps, useUserProps } from '../types/contextTypes';

export const useUser = create<useUserProps>(() => ({
    USER_NAME: 'Wilfryn',
    PROFILE_PICTURE: 'https://i.pinimg.com/474x/07/c4/72/07c4720d19a9e9edad9d0e939eca304a.jpg',
}));

export const useNavBar = create<useNavBarProps>((set) => ({
    navBarIsActive: false,

    changeNavBarVisibility: () =>
        set((state) => ({
            navBarIsActive: state.navBarIsActive ? false : true,
        })),
}));

export const useGroupContext = create<useGroupContextProps>((set) => ({
    GROUPS: [],
    MAX_GROUPS: false,

    setMaxGroupAmount: (value) => {
        set({
            MAX_GROUPS: value,
        });
    },

    setGroupsInContext: (groups) =>
        set({
            GROUPS: groups,
        }),

    addGroupToContext: (newGroup) => {
        set((state) => ({
            GROUPS: [...state.GROUPS, newGroup],
        }));
    },
}));
