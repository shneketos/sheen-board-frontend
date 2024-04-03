import { CalendarEvent } from "entities/Calendar/model/types/CalendarType";
import { EditCalendarEventForm } from "features/EditCalendarEvent";
import React, { memo } from "react";
import { formatDate } from "shared/lib/FormatDate/FormatDate";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { CalendarModal } from "shared/ui/CalendarModal/CalendarModal";
import styles from "./OverviewUpcomingItem.module.scss";
export const OverviewUpcomingItem = memo((props: CalendarEvent) => {
    const { id, title, start, end, color, desc, allDay } = props;
    const date = `${formatDate(start.toString())} -
        ${formatDate(end.toString())}`;
    const [openEvent, setOpenEvent] = React.useState(false);
    const oneDay = formatDate(start.toString()) === formatDate(end.toString());
    return (
        <>
            <li className={styles.eventItem} onClick={() => setOpenEvent(true)}>
                <Button theme={ButtonTheme.CLEAR} className={styles.btn}>
                    <div className={styles.top}>
                        <span
                            className={styles.color_box}
                            style={{ background: color }}
                        />
                        <p className={styles.eventItem_date}>
                            {oneDay ? formatDate(start.toString()) : date}
                        </p>
                    </div>
                    <span className={styles.eventItem_title}>{title}</span>
                </Button>
            </li>
            {openEvent && (
                <CalendarModal
                    isOpen={openEvent}
                    onClose={() => setOpenEvent(false)}
                >
                    <EditCalendarEventForm
                        id={id}
                        title={title}
                        desc={desc}
                        start={start}
                        end={end}
                        allDay={allDay}
                        color={color}
                        onClose={() => setOpenEvent(false)}
                    />
                </CalendarModal>
            )}
        </>
    );
});
