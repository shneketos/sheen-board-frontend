import { create } from "zustand";
import { DashboardState } from "../types/DashboardType";
import { $api } from "shared/api/api";

export const useDashboardStore = create<DashboardState>((set) => ({
    dashboards: null,
    isLoading: true,
    errors: [],
    fetchDashboards: async (id: number) => {
        try {
            const { data } = await $api.get(`/workspace/user/${id}`);
            set({ dashboards: data });
            set({ isLoading: false });
        } catch (err) {
            set({ dashboards: null });
            set({ isLoading: false });
        }
    },
}));
