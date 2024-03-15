import styles from "./UpcomingEvents.module.scss";
import CalendarIcon from "shared/assets/icons/calendar.svg?react";
import { UpcomingEventItem } from "../UpcomingEventItem/UpcomingEventItem";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import PlusIcon from "shared/assets/icons/plus.svg?react";
import { memo } from "react";
export const UpcomingEvents = memo(() => {
    return (
        <div className={styles.upcoming}>
            <div>
                <Button
                    theme={ButtonTheme.DEFAULT}
                    className={styles.create_event}
                >
                    <PlusIcon />
                    <span>Create new event</span>
                </Button>
            </div>
            <div className={styles.upcoming_events}>
                <div className={styles.title}>
                    <CalendarIcon width={20} height={20} />
                    <span>Upcoming events</span>
                </div>
                <div className={styles.events}>
                    <UpcomingEventItem />
                    <UpcomingEventItem />
                    <UpcomingEventItem />
                </div>
            </div>
        </div>
    );
});
