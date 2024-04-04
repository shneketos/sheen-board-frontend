import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import styles from "./OverviewHeader.module.scss";
import { Avatar } from "shared/ui/Avatar/Avatar";
import WorkspaceIcon from "shared/assets/icons/workspace.svg?react";
export const OverviewHeader = () => {
    const dash = useDashboardStore((state) => state.thisDash);
    const userList = useDashboardStore((state) => state.dashMembers);
    if (dash !== null) {
        return (
            <div className={styles.projectheader}>
                <div className={styles.projectheader_top}>
                    <div className={styles.projectheader_left}>
                        <WorkspaceIcon width={22} height={22} />
                        <p className={styles.title}>{dash.title}</p>
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
