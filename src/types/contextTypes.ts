import type { GroupsT } from '.';

export type useUserProps = {
    USER_NAME: string;
    PROFILE_PICTURE: string;
};

export type useNavBarProps = {
    navBarIsActive: boolean;
    changeNavBarVisibility: () => void;
};

export type useGroupContextProps = {
    GROUPS: GroupsT[];
    MAX_GROUPS: boolean;
    setMaxGroupAmount: (value?: boolean) => void;
    setGroupsInContext: (groups: GroupsT[]) => void;
    addGroupToContext: (newGroup: GroupsT) => void;
};
