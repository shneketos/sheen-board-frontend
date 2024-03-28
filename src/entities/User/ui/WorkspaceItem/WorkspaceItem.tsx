import styles from "./WorkspaceItem.module.scss";
import { Workspace } from "entities/User/model/types/UserType";
import { useUserStore } from "entities/User";
import { LeaveFromWorkspace } from "features/LeaveFromWorkspace";
import { DeleteWorkspace } from "features/DeleteWorkspace";
export const WorkspaceItem = (props: Workspace) => {
    const { id, title, owner, members } = props;
    const user = useUserStore((state) => state.user);
    return (
        <li className={styles.workspace}>
            <span className={styles.title}>{title}</span>
            {user.id === owner ? (
                <DeleteWorkspace id={id} />
            ) : (
                <LeaveFromWorkspace
                    userId={user.id}
                    workspaceId={id}
                    members={members}
                />
            )}
        </li>
    );
};
