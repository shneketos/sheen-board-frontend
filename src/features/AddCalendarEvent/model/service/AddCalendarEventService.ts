import { $api } from "shared/api/api";
import { AddCalendarEventServiceProps } from "../types/AddCalendarEventType";

export const AddCalendarEventService = async (
    props: AddCalendarEventServiceProps
) => {
    const { id, title } = props;
    const params = {
        title: title,
        desc: "description",
        start: new Date(),
        end: new Date(),
        color: "red",
        allDay: false,
        calendarId: id,
    };
    const response = $api.post("/calendar-events", params);
    return response;
};
