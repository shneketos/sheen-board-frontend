import React from "react";
import styles from "./UpcomingEvents.module.scss";
import CalendarIcon from "shared/assets/icons/calendar.svg?react";
import { UpcomingEventItem } from "../UpcomingEventItem/UpcomingEventItem";
export const UpcomingEvents = () => {
    return (
        <div className={styles.upcoming}>
            <div className={styles.title}>
                <CalendarIcon width={20} height={20} />
                <span>Upcoming events</span>
            </div>
            <div className={styles.items}>
                <UpcomingEventItem />
            </div>
        </div>
    );
};
