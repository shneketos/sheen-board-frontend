import React from "react";
import styles from "./EditCalendarEventForm.module.scss";
import { CalendarEventProps } from "../model/types/EditCalendarEventType";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
export const EditCalendarEventForm = (props: CalendarEventProps) => {
    const { title, desc, start, end, color } = props;

    const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    const dateFormatter = new Intl.DateTimeFormat("ru", options);
    return (
        <div className={styles.eventForm}>
            <div className={styles.event}>
                <div className={styles.title}>{title}</div>
                <div className={styles.info}>
                    <div className={styles.date_from}>
                        {dateFormatter.format(start)}
                    </div>
                    <div className={styles.date_to}>
                        {end.toLocaleDateString()}
                    </div>
                    <div className={styles.time}>
                        {start.toLocaleTimeString()}-{end.toLocaleTimeString()}
                    </div>
                    <div className={styles.color}>{color}</div>
                    <div className={styles.desc}>{desc}</div>
                </div>
            </div>
            <div className={styles.buttons}>
                <Button theme={ButtonTheme.CLEAR}>Delete event</Button>
                <Button theme={ButtonTheme.CLEAR}>Edit</Button>
            </div>
        </div>
    );
};
