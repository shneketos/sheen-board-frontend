export interface CalendarEventProps {
    id: number;
    title: string;
    allDay: boolean;
    start: Date;
    end: Date;
    color: string;
    desc: string;
    onClose?: () => void;
}
export interface DeleteCalendarEventProps {
    id: number;
}
