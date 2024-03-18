import { EventCalendar } from "../EventCalendar/EventCalendar";
import styles from "./Calendar.module.scss";
import { UpcomingEvents } from "../UpcomingEvents/UpcomingEvents";
import { memo, useEffect } from "react";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { useCalendarStore } from "entities/Calendar/model/store/CalendarStore";
export const Calendar = memo(({ id }: { id: string }) => {
    const dash = useDashboardStore((state) => state.thisDash);
    const getDash = useDashboardStore((state) => state.fetchThisDash);
    const dashLoading = useDashboardStore((state) => state.thisDashIsLoading);
    const calendar = useCalendarStore((state) => state.calendar);
    const fetchCalendar = useCalendarStore((state) => state.fetchCalendar);
    const calendarLoading = useCalendarStore((state) => state.isLoading);
    useEffect(() => {
        getDash(parseInt(id));
    }, [getDash, id]);
    useEffect(() => {
        if (dash !== null) {
            fetchCalendar(dash.calendar.id);
        }
    }, [dash, fetchCalendar]);
    console.log(calendar);
    return (
        <div className={styles.calendar}>
            {!dashLoading && (
                <>
                    <UpcomingEvents id={id} />
                    {!calendarLoading && <EventCalendar />}
                </>
            )}
        </div>
    );
});
