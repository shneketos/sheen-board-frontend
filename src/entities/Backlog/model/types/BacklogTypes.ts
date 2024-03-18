export interface BacklogTask {
    id: number;
    priority: string;
    status: string;
    story: number;
    title: string;
}

export interface BacklogSprint {
    id: number;
    title: string;
    tasks: BacklogTask[];
}
export interface Backlog {
    id: number;
    sprints: BacklogSprint[];
}
export interface BacklogStore {
    backlog: Backlog;
    isLoading: boolean;
    fetchBacklog: (id: number) => Promise<void>;
}
