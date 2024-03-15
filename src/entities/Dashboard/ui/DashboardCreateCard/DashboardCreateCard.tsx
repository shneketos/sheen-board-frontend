import React, { memo } from "react";
import styles from "./DashboardCreateCard.module.scss";
import PlusCircle from "shared/assets/icons/plusCircle.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/modal/Modal";
import { AddWorkspaceForm } from "features/AddWorkspace";
export const DashboardCreateCard = memo(() => {
    const [openAdd, setOpenAdd] = React.useState(false);
    return (
        <div className={styles.dashboard_create_card}>
            <div className={styles.dashboard_create_card_wrapper}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={() => setOpenAdd(true)}
                >
                    <PlusCircle width={125} height={125} />
                </Button>
            </div>
            {openAdd && (
                <Modal isOpen={openAdd} onClose={() => setOpenAdd(false)}>
                    <AddWorkspaceForm onClose={() => setOpenAdd(false)} />
                </Modal>
            )}
        </div>
    );
});
