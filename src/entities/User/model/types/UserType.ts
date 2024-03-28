export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
    workspaces: string[];
}
export interface userState {
    user: User;
    isLoading: boolean;
    fetchUser: () => Promise<void>;
    logoutUser: () => void;
}
export interface Workspace {
    id: number;
    title: string;
    members: number[];
    owner: number;
}
