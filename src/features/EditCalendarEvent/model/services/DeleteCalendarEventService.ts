import { $api } from "shared/api/api";
import { DeleteCalendarEventProps } from "../types/EditCalendarEventType";

export const DeleteCalendarEventService = async (
    props: DeleteCalendarEventProps
) => {
    const { id } = props;
    const response = await $api.delete(`/calendar-events/${id}`);
    return response;
};
