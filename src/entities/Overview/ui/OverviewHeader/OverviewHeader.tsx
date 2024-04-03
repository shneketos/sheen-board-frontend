import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import styles from "./OverviewHeader.module.scss";
import { Avatar } from "shared/ui/Avatar/Avatar";
export const OverviewHeader = () => {
    const total = {
        total: 340,
        done: 10,
        doing: 12,
        todo: 10,
    };
    const percentTotal = ((total.done / total.total) * 100).toFixed(0);
    const dash = useDashboardStore((state) => state.thisDash);
    const userList = useDashboardStore((state) => state.dashMembers);
    if (dash !== null) {
        return (
            <div className={styles.projectheader}>
                <div className={styles.projectheader_top}>
                    <div className={styles.projectheader_left}>
                        <p className={styles.title}>{dash.title}</p>
                        <div className={styles.projectheader_left_bottom}>
                            <div className={styles.projectheader_progressbar}>
                                <div
                                    className={
                                        styles.projectheader_progressbar_line
                                    }
                                    style={{ width: `${percentTotal}%` }}
                                ></div>
                            </div>
                            <span
                                className={
                                    styles.projectheader_progressbar_text
                                }
                            >
                                {`${percentTotal}% completed`}
                            </span>
                        </div>
                    </div>
                    <div className={styles.projectheader_right}>
                        <div className={styles.projectheader_right_users}>
                            {userList !== null &&
                                userList
                                    .slice(0, 3)
                                    .map((user) => (
                                        <Avatar
                                            src={user.avatar}
                                            name={user.name}
                                        />
                                    ))}
                            {userList !== null && userList.length > 3 && (
                                <span
                                    className={
                                        styles.projectheader_right_users_plus
                                    }
                                >
                                    +{userList.length - 3}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
