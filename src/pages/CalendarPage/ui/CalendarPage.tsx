import { CalendarContent } from "entities/Calendar";
import { useParams } from "react-router-dom";
import { Layout } from "shared/ui/Layout/Layout";

export const CalendarPage = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <Layout>
            <CalendarContent />
        </Layout>
    );
};
export default CalendarPage;
