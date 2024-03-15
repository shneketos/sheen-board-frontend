import { EventCalendar } from "../EventCalendar/EventCalendar";
import styles from "./Calendar.module.scss";
import { UpcomingEvents } from "../UpcomingEvents/UpcomingEvents";
import { memo } from "react";
export const Calendar = memo(() => {
    return (
        <div className={styles.calendar}>
            <UpcomingEvents />
            <EventCalendar />
        </div>
    );
});
