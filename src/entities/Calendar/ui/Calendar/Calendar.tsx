import { EventCalendar } from "../EventCalendar/EventCalendar";
import styles from "./Calendar.module.scss";
import { UpcomingEvents } from "../UpcomingEvents/UpcomingEvents";
export const Calendar = () => {
    return (
        <div className={styles.calendar}>
            <UpcomingEvents />
            <EventCalendar />
        </div>
    );
};
