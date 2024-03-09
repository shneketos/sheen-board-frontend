import { KanbanBoard } from "entities/KanbanBoard";
import { useParams } from "react-router-dom";

export const KanbanPage = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <>
            <KanbanBoard />
        </>
    );
};
export default KanbanPage;
