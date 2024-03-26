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
    errors: string[];
    fetchUser: () => Promise<void>;
    logoutUser: () => void;
}
