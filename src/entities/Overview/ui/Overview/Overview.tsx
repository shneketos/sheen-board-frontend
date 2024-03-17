import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import styles from "./Overview.module.scss";
export const Overview = () => {
    const thisDash = useDashboardStore((state) => state.thisDash);
    console.log(thisDash);
    const kanban = {
        total: 17,
        done: 10,
        doing: 6,
        todo: 1,
    };
    const kanbanTotal = ((kanban.done / kanban.total) * 100).toFixed(0);
    return (
        <div className={styles.overview}>
            <div className={styles.stats}>
                <div className={styles.stats_block}>
                    <div className={styles.stats_block_upper}>
                        <span>Kanban</span>
                    </div>
                    <div className={styles.stats_block_center}>
                        <div className={styles.stats_progressbar}>
                            <div
                                className={styles.stats_progressbar_line}
                                style={{ width: `${kanbanTotal}%` }}
                            ></div>
                        </div>
                        <span
                            className={styles.stats_progressbar_text}
                        >{`${kanbanTotal}% completed`}</span>
                    </div>
                    <div className={styles.stats_block_bottom}>
                        <div className={styles.stats_item}>
                            <p>Total</p>
                            <span>{kanban.total}</span>
                        </div>
                        <div className={styles.stats_item}>
                            <p>To Do</p>
                            <span>{kanban.todo}</span>
                        </div>
                        <div className={styles.stats_item}>
                            <p>Doing</p>
                            <span>{kanban.doing}</span>
                        </div>
                        <div className={styles.stats_item}>
                            <p>Done</p>
                            <span>{kanban.done}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.stats_block}>
                    <div className={styles.stats_block_upper}>
                        <span>Kanban</span>
                    </div>
                    <div className={styles.stats_block_center}>
                        <div className={styles.stats_progressbar}>
                            <div
                                className={styles.stats_progressbar_line}
                                style={{ width: `${kanbanTotal}%` }}
                            ></div>
                        </div>
                        <span
                            className={styles.stats_progressbar_text}
                        >{`${kanbanTotal}% completed`}</span>
                    </div>
                    <div className={styles.stats_block_bottom}>
                        <div className={styles.stats_item}>
                            <p>Total</p>
                            <span>{kanban.total}</span>
                        </div>
                        <div className={styles.stats_item}>
                            <p>To Do</p>
                            <span>{kanban.todo}</span>
                        </div>
                        <div className={styles.stats_item}>
                            <p>Doing</p>
                            <span>{kanban.doing}</span>
                        </div>
                        <div className={styles.stats_item}>
                            <p>Done</p>
                            <span>{kanban.done}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.stats_block}>
                    <div className={styles.stats_block_upper}>
                        <span>Kanban</span>
                    </div>
                    <div className={styles.stats_block_center}>
                        <div className={styles.stats_progressbar}>
                            <div
                                className={styles.stats_progressbar_line}
                                style={{ width: `${kanbanTotal}%` }}
                            ></div>
                        </div>
                        <span
                            className={styles.stats_progressbar_text}
                        >{`${kanbanTotal}% completed`}</span>
                    </div>
                    <div className={styles.stats_block_bottom}>
                        <div className={styles.stats_item}>
                            <p>Total</p>
                            <span>{kanban.total}</span>
                        </div>
                        <div className={styles.stats_item}>
                            <p>To Do</p>
                            <span>{kanban.todo}</span>
                        </div>
                        <div className={styles.stats_item}>
                            <p>Doing</p>
                            <span>{kanban.doing}</span>
                        </div>
                        <div className={styles.stats_item}>
                            <p>Done</p>
                            <span>{kanban.done}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
