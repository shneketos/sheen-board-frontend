import { $api } from "shared/api/api";
import { CalendarEventProps } from "../types/EditCalendarEventType";

export const EditCalendarEventService = async (props: CalendarEventProps) => {
    const { id, title, desc, start, end, color, allDay } = props;
    const params = {
        title: title,
        desc: desc,
        start: start,
        end: end,
        color: color,
        allDay: allDay,
    };
    const response = await $api.patch(`/calendar-events/${id}`, params);
    return response;
};
