import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import styles from "./Overview.module.scss";
import { OverviewKanbanBlock } from "../OverviewKanbanBlock/OverviewKanbanBlock";
export const Overview = () => {
    const thisDash = useDashboardStore((state) => state.thisDash);
    console.log(thisDash);

    return (
        <div className={styles.overview}>
            <div className={styles.stats}>
                <OverviewKanbanBlock />
            </div>
        </div>
    );
};
