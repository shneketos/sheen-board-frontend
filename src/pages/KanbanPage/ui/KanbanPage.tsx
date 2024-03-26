import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { KanbanBoard } from "entities/KanbanBoard";
import { useKanbanStore } from "entities/KanbanBoard/model/store/KanbanStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const KanbanPage = () => {
    const { id } = useParams();
    const dash = useDashboardStore((state) => state.thisDash);
    const getDash = useDashboardStore((state) => state.fetchThisDash);
    const fetchKanban = useKanbanStore((state) => state.fetchKanban);
    useEffect(() => {
        getDash(parseInt(id));
    }, [getDash, id]);
    useEffect(() => {
        if (dash !== null) {
            fetchKanban(dash.kanban.id);
        }
    }, [dash, fetchKanban]);
    return (
        <>
            <KanbanBoard />
        </>
    );
};
export default KanbanPage;
