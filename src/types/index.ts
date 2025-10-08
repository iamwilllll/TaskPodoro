export type GroupsT = {
    id: string;
    name: string;
    description: string;
    image: string;
    tasks: Tasks[];
};

export type GroupsTDraftT = Omit<GroupsT, 'id'>;

export type Tasks = {
    id: string;
    name: string;
    description: string;
};

export type TasksTDraftT = Omit<Tasks, 'id'>;
