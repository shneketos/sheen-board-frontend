import { Button, ButtonTheme } from "shared/ui/Button/Button";
import styles from "./RemoveMember.module.scss";
import { RemoveMemberProps } from "../model/types/RemoveMemberType";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { RemoveMemberService } from "../model/services/RemoveMemberService";
import {
    NotificationTheme,
    useNotification,
} from "app/providers/notificationProvider";

export const RemoveMember = (props: RemoveMemberProps) => {
    const { id } = props;
    const { setMessage, setNotificationTheme, setVisible } = useNotification();

    const dash = useDashboardStore((state) => state.thisDash);
    const fetchDashMembers = useDashboardStore(
        (state) => state.fetchDashMembers
    );
    const onClickRemoveMember = () => {
        const filteredMembers = dash.members.filter(
            (member) => member.toString() !== id.toString()
        );
        RemoveMemberService({
            dashId: dash.id,
            members: filteredMembers,
        }).then(() => {
            fetchDashMembers(dash.id);
            setVisible(true);
            setMessage("Member removed");
            setNotificationTheme(NotificationTheme.SUCCESS);
        });
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={styles.btn}
            onClick={onClickRemoveMember}
        >
            <span>Remove</span>
        </Button>
    );
};
