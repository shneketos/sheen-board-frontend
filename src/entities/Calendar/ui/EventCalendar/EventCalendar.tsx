import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./EventCalendar.scss";
import "moment/locale/ru";

moment.updateLocale("ru", { week: { dow: 1 } });
const localizer = momentLocalizer(moment);

export const EventCalendar = () => {
    const [events, setEvents] = React.useState([
        {
            id: 0,
            title: "All Day Event very long title",
            allDay: true,
            start: new Date(2024, 2, 1),
            end: new Date(2024, 2, 5),
            color: "#6121ab",
        },
        {
            id: 1,
            title: "time",
            allDay: false,
            start: new Date(2024, 2, 13, 10, 1, 1),
            end: new Date(2024, 2, 13, 22, 2, 2),
            color: "#61dafb",
        },
    ]);
    const onClickAddEvent = () => {
        setEvents([
            ...events,
            {
                id: 2,
                title: "time",
                allDay: false,
                start: new Date(2024, 2, 15, 10, 1, 1),
                end: new Date(2024, 2, 15, 22, 2, 2),
                color: "#6121ab",
            },
        ]);
    };

    return (
        <div>
            <button onClick={onClickAddEvent}>Add EVenet</button>
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                events={events}
                style={{ height: 500 }}
                selectable
                onSelectSlot={(event) => console.log(event)}
                eventPropGetter={(event) => {
                    return {
                        style: {
                            backgroundColor: event.color || "#b64fc8",
                            borderColor: event.color || "#b64fc8",
                        },
                    };
                }}
            />
        </div>
    );
};
