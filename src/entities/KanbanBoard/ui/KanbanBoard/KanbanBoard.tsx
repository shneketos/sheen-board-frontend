import styles from "./KanbanBoard.module.scss";
import { KanbanRowAddRow } from "../KanbanRowAddRow/KanbanRowAddRow";
import { KanbanRow } from "../KanbanRow/KanbanRow";
import { memo, useEffect } from "react";
import { useKanbanStore } from "entities/KanbanBoard/model/store/KanbanStore";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";

export const KanbanBoard = memo(({ id }: { id: string }) => {
    const dash = useDashboardStore((state) => state.thisDash);
    const getDash = useDashboardStore((state) => state.fetchThisDash);
    const dashLoading = useDashboardStore((state) => state.thisDashIsLoading);
    const kanban = useKanbanStore((state) => state.kanban);
    const fetchKanban = useKanbanStore((state) => state.fetchKanban);
    const KanbanLoading = useKanbanStore((state) => state.isLoading);
    useEffect(() => {
        getDash(parseInt(id));
    }, [getDash, id]);
    useEffect(() => {
        if (dash !== null) {
            fetchKanban(dash.kanban.id);
        }
    }, [dash, fetchKanban]);

    console.log(kanban);
    return (
        <div className={styles.kanban_content}>
            {!KanbanLoading &&
                kanban.lists.map((row) => (
                    <KanbanRow
                        key={row.id}
                        title={row.title}
                        id={row.id}
                        tasks={row.tasks}
                    />
                ))}
            {!dashLoading && <KanbanRowAddRow id={dash.kanban.id} />}
        </div>
    );
});
