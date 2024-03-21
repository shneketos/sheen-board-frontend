import styles from "./UpcomingEvents.module.scss";
import CalendarIcon from "shared/assets/icons/calendar.svg?react";
import { UpcomingEventItem } from "../UpcomingEventItem/UpcomingEventItem";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import PlusIcon from "shared/assets/icons/plus.svg?react";
import React, { memo } from "react";
import { AddCalendarEvent } from "features/AddCalendarEvent/ui/AddCalendarEventForm";
import { Modal } from "shared/ui/modal/Modal";
import { useCalendarStore } from "entities/Calendar/model/store/CalendarStore";
export const UpcomingEvents = memo(() => {
    const [openAdd, setOpenAdd] = React.useState(false);
    const calendar = useCalendarStore((state) => state.calendar);
    const calendarLoading = useCalendarStore((state) => state.isLoading);
    return (
        <div className={styles.upcoming}>
            <div>
                <Button
                    theme={ButtonTheme.DEFAULT}
                    className={styles.create_event}
                    onClick={() => setOpenAdd(true)}
                >
                    <PlusIcon />
                    <span>Create new event</span>
                </Button>
                {openAdd && (
                    <Modal isOpen={openAdd} onClose={() => setOpenAdd(false)}>
                        <AddCalendarEvent onClose={() => setOpenAdd(false)} />
                    </Modal>
                )}
            </div>
            <div className={styles.upcoming_events}>
                <div className={styles.title}>
                    <CalendarIcon width={20} height={20} />
                    <span>Upcoming events</span>
                </div>
                <ul className={styles.events}>
                    {!calendarLoading &&
                        calendar.events.map((item) => (
                            <UpcomingEventItem
                                key={item.id}
                                title={item.title}
                                start={item.start}
                                end={item.end}
                                color={item.color}
                            />
                        ))}
                </ul>
            </div>
        </div>
    );
});
