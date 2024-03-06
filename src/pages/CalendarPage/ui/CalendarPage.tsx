import { CalendarContent } from "entities/Calendar";
import { useParams } from "react-router-dom";

export const CalendarPage = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <CalendarContent />
        </>
    );
};
export default CalendarPage;
