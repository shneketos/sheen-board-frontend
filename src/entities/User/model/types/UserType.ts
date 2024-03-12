export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
    password: string;
    workspaces: string[];
}
export interface userState {
    user: User[];
    isLoading: boolean;
    errors: string[];
    addUser: (
        id: number,
        name: string,
        password: string,
        email: string,
        avatar: string,
        workspaces: string[]
    ) => void;
    fetchUser: () => Promise<void>;
}
