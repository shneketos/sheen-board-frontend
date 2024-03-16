import React from "react";
import styles from "./AddWorkspaceForm.module.scss";
import CloseIcon from "shared/assets/icons/close.svg?react";

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import { useUserStore } from "entities/User";
import { AddWorkspace } from "../model/services/AddWorkspace";

interface addWorkspaceProps {
    onClose?: () => void;
}
export const AddWorkspaceForm = (props: addWorkspaceProps) => {
    const { onClose } = props;
    const [titleValue, setTitleValue] = React.useState("");
    const user = useUserStore((state) => state.user);

    const onClickAddCard = () => {
        AddWorkspace({
            title: titleValue,
            ownerId: user.id,
            members: [user.id],
        });
        onClose();
    };
    return (
        <div className={styles.form}>
            <div className={styles.form_top}>
                <p>Add new workspace</p>
                <Button
                    className={styles.btn_close}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClose}
                >
                    <CloseIcon width={20} height={20} />
                </Button>
            </div>
            <div className={styles.form_center}>
                <span>Title</span>
                <Input
                    className={styles.input}
                    value={titleValue}
                    onChange={(val) => setTitleValue(val)}
                    placeholder="Enter title"
                />
            </div>
            <div className={styles.form_bottom}>
                <Button className={styles.btn_cancel} theme={ButtonTheme.CLEAR}>
                    Cancel
                </Button>
                <Button
                    className={styles.btn_save}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClickAddCard}
                >
                    Add
                </Button>
            </div>
        </div>
    );
};
