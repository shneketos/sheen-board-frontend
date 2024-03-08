import React, { useState } from "react";
import styles from "./EditKanbanCardForm.module.scss";
import CloseIcon from "shared/assets/icons/close.svg?react";
import ListIcon from "shared/assets/icons/list.svg?react";
import PriorityIcon from "shared/assets/icons/priority.svg?react";
import ClockIcon from "shared/assets/icons/clock.svg?react";
import FlagIcon from "shared/assets/icons/flag.svg?react";
import TrashcanIcon from "shared/assets/icons/trashcan.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import { TextArea } from "shared/ui/TextArea/TextArea";
import { InfoModal } from "shared/ui/InfoModal/InfoModal";
import DatePicker from "react-datepicker";
import "shared/ui/DatePicker/DatePicker.scss";
import { EditKanbanCardProps } from "../model/types/EditKanbanCardFormType";

export const EditKanbanCardForm = (props: EditKanbanCardProps) => {
    const { id, title, desc, priority, date, rowTitle, onClose } = props;
    const [newTitle, setNewTitle] = useState(title);
    const [newDesc, setNewDesc] = useState(desc);
    const [newStage, setNewStage] = useState(rowTitle);
    const [newPriority, setNewPriority] = useState(priority);
    const [isEditing, setIsEditing] = useState(false);
    const [StageEditing, setStageEditing] = useState(false);
    const [PriorityEditing, setPriorityEditing] = useState(false);
    const [newDate, setNewDate] = useState(new Date());
    const onClickSave = () => {
        console.log(
            `saved with ${newTitle},${newDesc},${newPriority} in ${rowTitle}`
        );
    };
    const onClickDeleted = () => {
        console.log(`deleted ${id} in ${rowTitle}`);
    };
    const onClickDiscard = () => {
        setStageEditing(false);
        setPriorityEditing(false);
        setIsEditing(false);
        setNewTitle(title);
        setNewDesc(desc);
        setNewStage(rowTitle);
        setNewPriority(priority);
    };

    console.log(newDate);
    const ArrayTitles = ["TO do", "in progres", "done", "active", "active"];
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
                        <Button
                            theme={ButtonTheme.CLEAR}
                            onClick={() => {
                                isEditing && setStageEditing(!StageEditing);
                            }}
                        >
                            {newStage}
                        </Button>
                    </div>
                    {StageEditing ? (
                        <InfoModal className={styles.stage_modal}>
                            <ul onMouseLeave={() => setStageEditing(false)}>
                                {ArrayTitles.map((item) => (
                                    <li
                                        key={item}
                                        onClick={() => {
                                            setNewStage(item);
                                            setStageEditing(false);
                                        }}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </InfoModal>
                    ) : (
                        ""
                    )}
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
                        <Button
                            theme={ButtonTheme.CLEAR}
                            onClick={() => {
                                isEditing &&
                                    setPriorityEditing(!PriorityEditing);
                            }}
                            className={`${styles[newPriority]} ${styles.priority}`}
                        >
                            {newPriority}
                        </Button>
                        {PriorityEditing && (
                            <InfoModal className={styles.priority_modal}>
                                <div
                                    className={styles.priority_modal_wrapper}
                                    onMouseLeave={() =>
                                        setPriorityEditing(false)
                                    }
                                >
                                    <span
                                        onClick={() => {
                                            setNewPriority("Low");
                                            setPriorityEditing(false);
                                        }}
                                        className={
                                            styles.priority_modal_wrapper_low
                                        }
                                    >
                                        Low
                                    </span>
                                    <span
                                        onClick={() => {
                                            setNewPriority("Medium");
                                            setPriorityEditing(false);
                                        }}
                                        className={
                                            styles.priority_modal_wrapper_medium
                                        }
                                    >
                                        Medium
                                    </span>
                                    <span
                                        onClick={() => {
                                            setNewPriority("High");
                                            setPriorityEditing(false);
                                        }}
                                        className={
                                            styles.priority_modal_wrapper_high
                                        }
                                    >
                                        High
                                    </span>
                                </div>
                            </InfoModal>
                        )}
                    </div>
                </div>
                <div className={styles.form_center_due}>
                    <span className={styles.form_info}>Due</span>
                    <div className={styles.dueBlock}>
                        <ClockIcon width={22} height={22} />
                        {isEditing ? (
                            <DatePicker
                                selected={newDate}
                                onChange={(date) => setNewDate(date)}
                                minDate={new Date()}
                            />
                        ) : (
                            <span>{date}</span>
                        )}
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
                        <TrashcanIcon width={20} height={20} />
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
