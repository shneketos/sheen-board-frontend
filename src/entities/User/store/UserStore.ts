import { create } from "zustand";
import { userState } from "../model/types/UserType";
import { $api } from "shared/api/api";

export const useUserStore = create<userState>((set) => ({
    user: [],
    currentUser: null,
    settings: {},
    isLoading: true,
    errors: [],
    addUser: (
        id: number,
        name: string,
        email: string,
        password: string,
        avatar: string,
        workspaces: string[]
    ) =>
        set((state) => ({
            user: [
                ...state.user,
                {
                    id,
                    name,
                    password,
                    email,
                    avatar,
                    workspaces,
                },
            ],
        })),
    fetchUser: async () => {
        const { data } = await $api.get("/users/me");
        set({ user: data });
        set({ isLoading: false });
    },
}));
