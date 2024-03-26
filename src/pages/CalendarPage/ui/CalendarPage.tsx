import { Calendar } from "entities/Calendar";
import { useCalendarStore } from "entities/Calendar/model/store/CalendarStore";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const CalendarPage = () => {
    const { id } = useParams();
    const dash = useDashboardStore((state) => state.thisDash);
    const getDash = useDashboardStore((state) => state.fetchThisDash);
    const fetchCalendar = useCalendarStore((state) => state.fetchCalendar);
    useEffect(() => {
        getDash(parseInt(id));
    }, [getDash, id]);
    useEffect(() => {
        if (dash !== null) {
            fetchCalendar(dash.calendar.id);
        }
    }, [dash, fetchCalendar]);
    return (
        <>
            <Calendar />
        </>
    );
};
export default CalendarPage;
