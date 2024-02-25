import React, { useState } from "react";
import styles from "./EditKanbanCardForm.module.scss";
import CloseIcon from "shared/assets/icons/close.svg";
import ListIcon from "shared/assets/icons/list.svg";
import PriorityIcon from "shared/assets/icons/priority.svg";
import ClockIcon from "shared/assets/icons/clock.svg";
import FlagIcon from "shared/assets/icons/flag.svg";
import TrashcanIcon from "shared/assets/icons/trashcan.svg";

import { type KanbanCardProps } from "entities/Kanban";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import { TextArea } from "shared/ui/TextArea/TextArea";
interface EditKanbanCardProps extends KanbanCardProps {
    onClose: () => void;
}
export const EditKanbanCardForm = (props: EditKanbanCardProps) => {
    const { id, title, desc, priority, date, rowTitle, onClose } = props;
    const [newTitle, setNewTitle] = useState(title);
    const [newDesc, setNewDesc] = useState(desc);
    const [newPriority, setNewPriority] = useState(priority);
    const [isEditing, setIsEditing] = useState(false);
    const onClickSave = () => {
        console.log(
            `saved with ${newTitle},${newDesc},${newPriority} in ${rowTitle}`
        );
    };
    const onClickDeleted = () => {
        console.log(`deleted ${id} in ${rowTitle}`);
    };
    const onClickDiscard = () => {
        setIsEditing(false);
        setNewTitle(title);
        setNewDesc(desc);
        setNewPriority(priority);
    };
    return (
        <div className={styles.form}>
            <div className={styles.form_top}>
                <div className={styles.form_top_left}>
                    <span className={styles.form_info}>Title</span>
                    {isEditing ? (
                        <Input
                            className={styles.edit_title}
                            value={newTitle}
                            onChange={(val) => setNewTitle(val)}
                        />
                    ) : (
                        <p className={styles.title}>{title}</p>
                    )}
                </div>
                <div className={styles.form_top_right}>
                    <Button onClick={onClose} theme={ButtonTheme.CLEAR}>
                        <CloseIcon width={22} height={22} />
                    </Button>
                </div>
            </div>
            <div className={styles.form_center}>
                <div className={styles.form_center_stage}>
                    <span className={styles.form_info}>Stage</span>
                    <div className={styles.stageBlock}>
                        <FlagIcon width={22} height={22} />
                        <span>{rowTitle}</span>
                    </div>
                </div>
                <div className={styles.form_center_desc}>
                    <span className={styles.form_info}>Desc</span>
                    <div className={styles.descBlock}>
                        <ListIcon width={22} height={22} />
                        {isEditing ? (
                            <TextArea
                                value={newDesc}
                                onChange={(val) => setNewDesc(val)}
                                cname={styles.edit_desc}
                            />
                        ) : (
                            <span className={styles.desc}>{desc}</span>
                        )}
                    </div>
                </div>
                <div className={styles.form_center_priority}>
                    <span className={styles.form_info}>Priority</span>

                    <div className={styles.priorityBlock}>
                        <PriorityIcon width={22} height={22} />
                        <span
                            className={`${styles[priority]} ${styles.priority}`}
                        >
                            {priority}
                        </span>
                    </div>
                </div>
                <div className={styles.form_center_due}>
                    <span className={styles.form_info}>Due</span>
                    <div className={styles.dueBlock}>
                        <ClockIcon width={20} height={20} />
                        <span>{date}</span>
                    </div>
                </div>
            </div>
            <div className={styles.form_bottom}>
                <div className={styles.form_bottom_left}>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        className={styles.btn_delete}
                        onClick={onClickDeleted}
                    >
                        <TrashcanIcon width={20} height={20} fill="red" />
                        <span>Delete card</span>
                    </Button>
                </div>
                {isEditing ? (
                    <div className={styles.form_bottom_right}>
                        <Button
                            className={styles.btn_cancel}
                            theme={ButtonTheme.CLEAR}
                            onClick={onClickDiscard}
                        >
                            Cancel
                        </Button>
                        <Button
                            className={styles.btn_save}
                            theme={ButtonTheme.CLEAR}
                            onClick={onClickSave}
                        >
                            Save
                        </Button>
                    </div>
                ) : (
                    <div className={styles.form_bottom_right}>
                        <Button
                            className={styles.btn_edit}
                            theme={ButtonTheme.CLEAR}
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
