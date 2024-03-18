import { create } from "zustand";
import { CalendarStore } from "../types/CalendarType";
import { $api } from "shared/api/api";

export const useCalendarStore = create<CalendarStore>((set) => ({
    calendar: null,
    isLoading: true,
    fetchCalendar: async (id) => {
        try {
            const { data } = await $api.get(`/calendar/${id}`);
            set({ calendar: data });
            set({ isLoading: false });
        } catch (err) {
            set({ calendar: null });
            set({ isLoading: false });
        }
    },
}));
