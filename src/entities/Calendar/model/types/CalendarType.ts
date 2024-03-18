export interface CalendarEvent {
    id: number;
    title: string;
    desc: string;
    start: Date;
    end: Date;
    color: string;
    allDay: boolean;
}

export interface Calendar {
    id: number;
    events: CalendarEvent[];
}

export interface CalendarStore {
    calendar: Calendar;
    isLoading: boolean;
    fetchCalendar: (id: number) => Promise<void>;
}
export interface UpcomingEventItemProps {
    title: string;
    start: Date;
    end: Date;
    color: string;
}
