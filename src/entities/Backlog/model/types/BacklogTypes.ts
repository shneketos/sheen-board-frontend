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
interface Backlog {
    id: number;
}
export interface BacklogStore {
    backlog: Backlog;
    isLoading: boolean;
    fetchBacklog: (id: number) => Promise<void>;
}
