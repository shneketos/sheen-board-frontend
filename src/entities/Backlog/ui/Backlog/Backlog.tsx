import styles from "./Backlog.module.scss";
import { BacklogList } from "../BacklogList/BacklogList";
import { BacklogAddSprint } from "../BacklogAddSprint/BacklogAddSprint";
import { memo } from "react";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { useBacklogStore } from "entities/Backlog/model/store/BacklogStore";
export const Backlog = memo(() => {
    const dash = useDashboardStore((state) => state.thisDash);
    const dashLoading = useDashboardStore((state) => state.thisDashIsLoading);
    const backlog = useBacklogStore((state) => state.backlog);
    const BacklogLoading = useBacklogStore((state) => state.isLoading);

    return (
        <div className={styles.backlog_content}>
            {!BacklogLoading &&
                backlog.sprints
                    .sort((a, b) => b.id - a.id)
                    .map((sprint) => (
                        <BacklogList
                            key={sprint.id}
                            id={sprint.id}
                            title={sprint.title}
                            tasks={sprint.tasks}
                        />
                    ))}
            {!dashLoading && <BacklogAddSprint id={dash.kanban.id} />}
        </div>
    );
});
