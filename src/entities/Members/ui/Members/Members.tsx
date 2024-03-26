import styles from "./Members.module.scss";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { MemberItem } from "../MemberItem/MemberItem";
import OwnerSelector from "entities/Members/model/selector/OwnerSelector";
export const Members = () => {
    const members = useDashboardStore((state) => state.dashMembers);
    const dash = useDashboardStore((state) => state.thisDash);
    const isLoading = useDashboardStore((state) => state.thisDashIsLoading);
    const isOwner = OwnerSelector();
    if (!isLoading) {
        return (
            <div className={styles.members}>
                <h1 className={styles.title}>{dash.title}</h1>
                <h2 className={styles.subtitle}>members</h2>
                <ul className={styles.list}>
                    <div className={styles.panel}>
                        <span className={styles.name}>Username</span>
                        <span className={styles.email}>Email</span>
                        {isOwner && (
                            <span className={styles.actions}>Actions</span>
                        )}
                    </div>
                    {members !== null &&
                        members.map((member) => (
                            <MemberItem
                                key={member.id}
                                id={member.id}
                                name={member.name}
                                email={member.email}
                            />
                        ))}
                </ul>
            </div>
        );
    }
};
