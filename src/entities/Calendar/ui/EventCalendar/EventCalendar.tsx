import React, { memo, useCallback } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./EventCalendar.scss";
import "moment/locale/ru";
import { EditCalendarEventForm } from "features/EditCalendarEvent";
import { CalendarEventProps } from "features/EditCalendarEvent/model/types/EditCalendarEventType";
import { CalendarModal } from "shared/ui/CalendarModal/CalendarModal";
import { useCalendarStore } from "entities/Calendar/model/store/CalendarStore";

moment.updateLocale("ru", { week: { dow: 1 } });
const localizer = momentLocalizer(moment);
export const EventCalendar = memo(() => {
    const calendar = useCalendarStore((state) => state.calendar);
    const events = calendar.events;
    const [opened, setOpened] = React.useState(false);
    const [thisEvent, setThisEvent] = React.useState<CalendarEventProps>(null);
    console.log(thisEvent);
    const onClickCloseModal = useCallback(() => {
        setOpened(false);
        setThisEvent(null);
    }, []);
    return (
        <div className="calendar_wrapper">
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                views={["month"]}
                events={events}
                style={{ height: 500 }}
                selectable
                onSelectEvent={(event) => {
                    setThisEvent(event);
                    setOpened(true);
                }}
                eventPropGetter={(event) => {
                    return {
                        style: {
                            backgroundColor: event.color || "#b64fc8",
                            borderColor: event.color || "#b64fc8",
                        },
                    };
                }}
            />
            {opened && (
                <CalendarModal isOpen={opened} onClose={onClickCloseModal}>
                    {thisEvent !== null && (
                        <EditCalendarEventForm
                            id={thisEvent.id}
                            title={thisEvent.title}
                            desc={thisEvent.desc}
                            start={thisEvent.start}
                            end={thisEvent.end}
                            allDay={thisEvent.allDay}
                            color={thisEvent.color}
                            onClose={onClickCloseModal}
                        />
                    )}
                </CalendarModal>
            )}
        </div>
    );
});
