import { EventCalendar } from "../EventCalendar/EventCalendar";
import styles from "./Calendar.module.scss";
import { UpcomingEvents } from "../UpcomingEvents/UpcomingEvents";
import { memo } from "react";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { useCalendarStore } from "entities/Calendar/model/store/CalendarStore";
export const Calendar = memo(() => {
    const dashLoading = useDashboardStore((state) => state.thisDashIsLoading);
    const calendarLoading = useCalendarStore((state) => state.isLoading);

    return (
        <div className={styles.calendar}>
            {!dashLoading && (
                <>
                    <UpcomingEvents />
                    {!calendarLoading && <EventCalendar />}
                </>
            )}
        </div>
    );
});
