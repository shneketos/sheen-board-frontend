import React from "react";
import styles from "./AddCalendarEventForm.module.scss";
import CloseIcon from "shared/assets/icons/close.svg?react";
import Input from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { AddCalendarEventProps } from "../model/types/AddCalendarEventType";
import { AddCalendarEventService } from "../model/service/AddCalendarEventService";
import { useCalendarStore } from "entities/Calendar/model/store/CalendarStore";
import { GenerateColor } from "shared/lib/GenerateColor/GenerateColor";
export const AddCalendarEvent = (props: AddCalendarEventProps) => {
    const { onClose } = props;
    const [titleValue, setTitleValue] = React.useState("");
    const calendar = useCalendarStore((state) => state.calendar);
    const fetchCalendar = useCalendarStore((state) => state.fetchCalendar);
    const color = GenerateColor();
    const onClickAddCard = () => {
        AddCalendarEventService({
            id: calendar.id,
            title: titleValue,
            color: `#${color}`,
        }).then(() => {
            onClose();
            fetchCalendar(calendar.id);
        });
    };
    return (
        <div className={styles.form}>
            <div className={styles.form_top}>
                <p>Add new event</p>
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
                <Button
                    className={styles.btn_cancel}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClose}
                >
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
