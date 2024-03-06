import { KanbanContent } from "entities/Kanban";
import { useParams } from "react-router-dom";

export const KanbanPage = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <KanbanContent />
        </>
    );
};
export default KanbanPage;
