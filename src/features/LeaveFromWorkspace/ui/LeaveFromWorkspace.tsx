import styles from "./LeaveFromWorkspace.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LeaveFromWorkspaceProps } from "../model/types/LeaveFromWorkspaceType";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { LeaveFromWorkspaceService } from "../model/services/LeaveFromWorkspaceService";
import { useUserStore } from "entities/User";
import {
    NotificationTheme,
    useNotification,
} from "app/providers/notificationProvider";
export const LeaveFromWorkspace = (props: LeaveFromWorkspaceProps) => {
    const { userId, workspaceId, members } = props;
    const { setMessage, setNotificationTheme, setVisible } = useNotification();

    const user = useUserStore((state) => state.user);
    const fetchWorkspaces = useDashboardStore(
        (state) => state.fetchUserWorkspaces
    );
    const onClickLeave = () => {
        const filteredMembers = members.filter(
            (member) => member.toString() !== userId.toString()
        );

        LeaveFromWorkspaceService({
            workspaceId: workspaceId,
            members: filteredMembers,
        }).then(() => {
            fetchWorkspaces(user.id);
            setVisible(true);
            setMessage("You left from workspace");
            setNotificationTheme(NotificationTheme.SUCCESS);
        });
    };
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={styles.btn}
            onClick={onClickLeave}
        >
            <span>Leave</span>
        </Button>
    );
};
