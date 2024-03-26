import { create } from "zustand";
import { DashboardState } from "../types/DashboardType";
import { $api } from "shared/api/api";
export const useDashboardStore = create<DashboardState>()((set) => ({
    dashboards: null,
    thisDash: null,
    thisDashIsLoading: true,
    isLoading: true,
    dashMembers: null,
    membersIsLoading: true,
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
    fetchThisDash: async (id: number) => {
        try {
            const { data } = await $api.get(`/workspace/${id}`);
            set({ thisDash: data });
            set({ thisDashIsLoading: false });
        } catch (err) {
            set({ thisDash: null });
            set({ thisDashIsLoading: false });
        }
    },
    fetchDashMembers: async (id: number) => {
        try {
            const { data } = await $api.get(`/workspace/members/${id}`);
            set({ dashMembers: data });
            set({ membersIsLoading: false });
        } catch (err) {
            set({ dashMembers: null });
            set({ membersIsLoading: false });
        }
    },
    nullThisDash: () => set({ thisDash: null }),
}));
