import styles from "./KanbanBoard.module.scss";
import { KanbanRowAddRow } from "../KanbanRowAddRow/KanbanRowAddRow";
import { KanbanRow } from "../KanbanRow/KanbanRow";
import { memo } from "react";
import { useKanbanStore } from "entities/KanbanBoard/model/store/KanbanStore";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";

export const KanbanBoard = memo(() => {
    const dash = useDashboardStore((state) => state.thisDash);
    const dashLoading = useDashboardStore((state) => state.thisDashIsLoading);
    const kanban = useKanbanStore((state) => state.kanban);
    const KanbanLoading = useKanbanStore((state) => state.isLoading);

    return (
        <div className={styles.kanban_content}>
            {!KanbanLoading &&
                kanban.lists
                    .sort((a, b) => a.id - b.id)
                    .map((row) => (
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
