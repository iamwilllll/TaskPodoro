import { create } from 'zustand';

type useUserProps = {
    USER_NAME: string;
    PROFILE_PICTURE: string;
};

type useNavBarProps = {
    navBarIsActive: boolean;
    changeNavBarVisibility: () => void;
};

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
