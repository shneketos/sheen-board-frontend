import { Button, ButtonTheme } from "shared/ui/Button/Button";
import styles from "./RemoveMember.module.scss";
import { RemoveMemberProps } from "../model/types/RemoveMemberType";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { RemoveMemberService } from "../model/services/RemoveMemberService";
export const RemoveMember = (props: RemoveMemberProps) => {
    const { id } = props;
    const dash = useDashboardStore((state) => state.thisDash);
    const fetchDashMembers = useDashboardStore(
        (state) => state.fetchDashMembers
    );
    const onClickRemoveMember = () => {
        const filteredMembers = dash.members.filter(
            (member) => member.toString() !== id.toString()
        );
        RemoveMemberService({ dashId: dash.id, members: filteredMembers }).then(
            () => fetchDashMembers(dash.id)
        );
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
