import { KanbanBoard } from "entities/KanbanBoard";
import { useParams } from "react-router-dom";

export const KanbanPage = () => {
    const { id } = useParams();
    return (
        <>
            <KanbanBoard id={id} />
        </>
    );
};
export default KanbanPage;
