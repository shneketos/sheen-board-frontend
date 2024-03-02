export interface BacklogSprintI {
    id: number;
    title: string;
    tasks: BacklogTaskI[];
}

export interface BacklogTaskI {
    taskId: number;
    title: string;
    priority: string;
    storypoints: number;
    status: string;
}
