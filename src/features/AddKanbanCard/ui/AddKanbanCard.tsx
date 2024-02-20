import { type KanbanRowProps } from "features/EditKanbanCard/model/types/KanbanCardTypes";
import React from "react";
import styles from "./AddKanbanCard.module.scss";
import CloseIcon from "shared/assets/icons/close.svg";
import Input from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

export const AddKanbanCard = (props: KanbanRowProps) => {
    const { id, title } = props;
    console.log(title, id);
    const [titleValue, setTitleValue] = React.useState("");

    const onChangeTitle = (val: string) => {
        setTitleValue(val);
    };
    return (
        <div className={styles.form}>
            <div className={styles.form_top}>
                <p>Add new card</p>
                <CloseIcon width={20} height={20} />
            </div>
            <div className={styles.form_center}>
                <span>Title</span>
                <Input
                    className={styles.input}
                    value={titleValue}
                    onChange={onChangeTitle}
                />
            </div>
            <div className={styles.form_bottom}>
                <Button theme={ButtonTheme.DEFAULT}>Cancel</Button>
                <Button theme={ButtonTheme.DEFAULT}>Save</Button>
            </div>
        </div>
    );
};
