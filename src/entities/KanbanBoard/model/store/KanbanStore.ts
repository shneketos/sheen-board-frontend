import { create } from "zustand";
import { KanbanStore } from "../types/KanbanTypes";
import { $api } from "shared/api/api";
export const useKanbanStore = create<KanbanStore>((set) => ({
    kanban: null,
    isLoading: true,
    fetchKanban: async (id) => {
        try {
            const { data } = await $api.get(`/kanban/${id}`);
            set({ kanban: data });
            set({ isLoading: false });
        } catch (err) {
            set({ kanban: null });
            set({ isLoading: false });
        }
    },
}));
