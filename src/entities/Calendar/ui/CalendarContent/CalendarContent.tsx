import { EventCalendar } from "../EventCalendar/EventCalendar";
import styles from "./CalendarContent.module.scss";
import { UpcomingEvents } from "../UpcomingEvents/UpcomingEvents";
export const CalendarContent = () => {
    return (
        <div className={styles.calendar}>
            <UpcomingEvents />
            <EventCalendar />
        </div>
    );
};
