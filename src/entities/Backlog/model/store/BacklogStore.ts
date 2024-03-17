import { create } from "zustand";
import { BacklogStore } from "../types/BacklogTypes";
import { $api } from "shared/api/api";

export const useBacklogStore = create<BacklogStore>((set) => ({
    backlog: null,
    isLoading: true,
    fetchBacklog: async (id) => {
        try {
            const { data } = await $api.get(`/backlog/${id}`);
            set({ backlog: data });
            set({ isLoading: false });
        } catch (err) {
            set({ backlog: null });
            set({ isLoading: false });
        }
    },
}));
