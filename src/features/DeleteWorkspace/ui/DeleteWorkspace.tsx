import styles from "./DeleteWorkspace.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { DeleteWorkspaceProps } from "../model/types/DeleteWorkspaceType";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { DeleteWorkspaceService } from "../model/services/DeleteWorkspaceServices";
import { useUserStore } from "entities/User";
export const DeleteWorkspace = (props: DeleteWorkspaceProps) => {
    const { id } = props;
    const user = useUserStore((state) => state.user);

    const fetchWorkspaces = useDashboardStore(
        (state) => state.fetchUserWorkspaces
    );
    const onClickDelete = () => {
        DeleteWorkspaceService({ id: id }).then(() => fetchWorkspaces(user.id));
    };
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={styles.btn}
            onClick={onClickDelete}
        >
            <span>Delete</span>
        </Button>
    );
};
