import React, { memo, useCallback } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./EventCalendar.scss";
import "moment/locale/ru";
import { EditCalendarEventForm } from "features/EditCalendarEvent";
import { CalendarEventProps } from "features/EditCalendarEvent/model/types/EditCalendarEventType";
import { CalendarModal } from "shared/ui/CalendarModal/CalendarModal";

moment.updateLocale("ru", { week: { dow: 1 } });
const localizer = momentLocalizer(moment);

export const EventCalendar = memo(() => {
    const events = [
        // Ваши начальные события
        {
            id: 0,
            title: "All Day Event very long title",
            allDay: true,
            start: new Date(2024, 2, 1),
            end: new Date(2024, 2, 5),
            color: "#6121ab",
            desc: "1231ashashashashashashashashashahja24",
        },
        {
            id: 1,
            title: "time",
            allDay: false,
            start: new Date(2024, 2, 13, 10, 1, 1),
            end: new Date(2024, 2, 13, 22, 2, 2),
            color: "#61dafb",
            desc: "123126123671327yagsa24",
        },
        {
            id: 2,
            title: "Test",
            allDay: false,
            start: new Date(2024, 2, 13, 10, 1, 1),
            end: new Date(2024, 2, 14, 22, 2, 2),
            color: "#61bafb",
            desc: "123721372371371367136yaqghasghas3124",
        },
    ];
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
        </div>
    );
});
