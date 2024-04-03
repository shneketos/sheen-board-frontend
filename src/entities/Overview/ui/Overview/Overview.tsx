import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import styles from "./Overview.module.scss";
import { OveriewItemType, OverviewItem } from "../OverviewItem/OverviewItem";
import { useKanbanStore } from "entities/KanbanBoard/model/store/KanbanStore";
export const Overview = () => {
    const thisDash = useDashboardStore((state) => state.thisDash);
    console.log(thisDash);
    const kanban = useKanbanStore((state) => state.kanban);
    console.log(kanban);
    return (
        <div className={styles.overview}>
            <div className={styles.stats}>
                <OverviewItem type={OveriewItemType.KANBAN} />
                <OverviewItem type={OveriewItemType.BACKLOG} />
                <OverviewItem type={OveriewItemType.CALENDAR} />
            </div>
        </div>
    );
};
