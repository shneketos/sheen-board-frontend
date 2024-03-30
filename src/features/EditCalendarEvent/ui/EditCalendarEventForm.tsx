import { useCallback, useState } from "react";
import { HexColorPicker } from "react-colorful";
import ReactDatePicker from "react-datepicker";

import styles from "./EditCalendarEventForm.module.scss";
import { CalendarEventProps } from "../model/types/EditCalendarEventType";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import CalendarIcon from "shared/assets/icons/calendar.svg?react";
import ClockIcon from "shared/assets/icons/clock.svg?react";
import CloseIcon from "shared/assets/icons/close.svg?react";
import InfoIcon from "shared/assets/icons/info.svg?react";
import PaletteIcon from "shared/assets/icons/palette.svg?react";
import TrashcanIcon from "shared/assets/icons/trashcan.svg?react";
import { TextArea } from "shared/ui/TextArea/TextArea";
import "shared/ui/DatePicker/DatePicker.scss";
import Input from "shared/ui/Input/Input";
import { formatDate } from "shared/lib/FormatDate/FormatDate";
import { useCalendarStore } from "entities/Calendar/model/store/CalendarStore";
import { DeleteCalendarEventService } from "../model/services/DeleteCalendarEventService";
import { EditCalendarEventService } from "../model/services/EditCalendarEventService";

export const EditCalendarEventForm = (props: CalendarEventProps) => {
    const { id, title, desc, start, end, color, allDay, onClose } = props;
    const [eventEditing, setEventEditing] = useState(false);
    const [colorEditing, setColorEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newDesc, setNewDesc] = useState(desc);
    const [newStartDate, setNewStartDate] = useState(start);
    const [newEndDate, setNewEndDate] = useState(end);
    const [newColor, setNewColor] = useState(color);
    const [newAllDay, setNewAllDay] = useState(allDay);
    const calendar = useCalendarStore((state) => state.calendar);
    const fetchCalendar = useCalendarStore((state) => state.fetchCalendar);
    //const oneDay = formatDate(start.toString()) === formatDate(end.toString());
    const oneDay = false;
    const onClickDiscard = useCallback(() => {
        setEventEditing(false);
        setColorEditing(false);
        setNewTitle(title);
        setNewDesc(desc);
        setNewAllDay(allDay);
        setNewColor(color);
        setNewStartDate(start);
        setNewEndDate(end);
    }, [title, desc, allDay, color, start, end]);
    const handleAllDayCheckboxChange = () => {
        setNewAllDay(!newAllDay);
        if (!newAllDay) {
            setNewStartDate((prevStartDate) => {
                const newStartDateWithZeroTime = new Date(prevStartDate);
                newStartDateWithZeroTime.setHours(0, 0, 0, 0);
                return newStartDateWithZeroTime;
            });
            setNewEndDate((prevEndDate) => {
                const newEndDateWithZeroTime = new Date(prevEndDate);
                newEndDateWithZeroTime.setHours(23, 59, 59, 59);
                return newEndDateWithZeroTime;
            });
        }
    };
    const onClickConfirm = () => {
        EditCalendarEventService({
            id: id,
            title: newTitle,
            desc: newDesc,
            start: newStartDate,
            end: newEndDate,
            color: newColor,
            allDay: newAllDay,
        }).then(() => {
            setEventEditing(false);
            fetchCalendar(calendar.id);
        });
    };
    const onClickDeleteEvent = () => {
        DeleteCalendarEventService({ id }).then(() => {
            onClose();
            fetchCalendar(calendar.id);
        });
    };

    return (
        <div className={styles.eventForm}>
            <div className={styles.event}>
                <div className={styles.title}>
                    {eventEditing ? (
                        <Input
                            className={styles.edit_title}
                            value={newTitle}
                            onChange={(val) => setNewTitle(val)}
                        />
                    ) : (
                        <span>{newTitle}</span>
                    )}

                    <Button
                        theme={ButtonTheme.CLEAR}
                        className={styles.close_btn}
                        onClick={onClose}
                    >
                        <CloseIcon className={styles.icon} />
                    </Button>
                </div>
                <div className={styles.info}>
                    {oneDay ? (
                        <>
                            <div className={styles.info_item}>
                                <CalendarIcon className={styles.icon} />
                                <span>{formatDate(start.toString())}</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.info_item}>
                                <CalendarIcon className={styles.icon} />
                                {eventEditing ? (
                                    <ReactDatePicker
                                        selected={newStartDate}
                                        onChange={(date) =>
                                            setNewStartDate(date)
                                        }
                                        timeInputLabel="Time:"
                                        dateFormat="MM/dd/yyyy h:mm aa"
                                        showTimeInput={!newAllDay}
                                        shouldCloseOnSelect={false}
                                        timeFormat={
                                            newAllDay ? null : "h:mm aa"
                                        }
                                        minDate={new Date()}
                                    />
                                ) : (
                                    <span>
                                        From:{" "}
                                        {formatDate(newStartDate.toString())}
                                    </span>
                                )}
                            </div>
                            <div className={styles.info_item}>
                                <CalendarIcon className={styles.icon} />
                                {eventEditing ? (
                                    <ReactDatePicker
                                        selected={newEndDate}
                                        onChange={(date) => setNewEndDate(date)}
                                        timeInputLabel="Time:"
                                        dateFormat="MM/dd/yyyy h:mm aa"
                                        showTimeInput={!newAllDay}
                                        shouldCloseOnSelect={false}
                                        timeFormat={
                                            newAllDay ? null : "h:mm aa"
                                        }
                                        minDate={newStartDate}
                                    />
                                ) : (
                                    <span>
                                        To: {formatDate(newEndDate.toString())}
                                    </span>
                                )}
                            </div>
                        </>
                    )}
                    <div className={styles.info_item}>
                        <ClockIcon className={styles.icon} />
                        {eventEditing ? (
                            <>
                                <input
                                    type="checkbox"
                                    checked={newAllDay}
                                    onChange={handleAllDayCheckboxChange}
                                />
                                <span>All day</span>
                            </>
                        ) : (
                            <>
                                {allDay ? (
                                    <span className={styles.allday}>
                                        All day
                                    </span>
                                ) : (
                                    <span>
                                        {formatDate(newStartDate.toString())}-
                                        {formatDate(newEndDate.toString())}
                                    </span>
                                )}
                            </>
                        )}
                    </div>
                    <div className={styles.info_item}>
                        <PaletteIcon className={styles.icon} />

                        <span
                            className={styles.color_box}
                            style={{ background: newColor }}
                            onClick={() => setColorEditing(!colorEditing)}
                        ></span>
                        {eventEditing && colorEditing && (
                            <HexColorPicker
                                className={styles.picker}
                                color={newColor}
                                onChange={setNewColor}
                            />
                        )}
                    </div>
                    <div className={styles.info_desc}>
                        <InfoIcon className={styles.icon} />
                        {eventEditing ? (
                            <TextArea
                                value={newDesc}
                                onChange={(val) => setNewDesc(val)}
                                cname={styles.edit_desc}
                            />
                        ) : (
                            <span className={styles.desc}>{newDesc}</span>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <div className={styles.buttons_left}>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        className={styles.btn_delete}
                        onClick={onClickDeleteEvent}
                    >
                        <TrashcanIcon width={20} height={20} fill="red" />
                        <span>Delete event</span>
                    </Button>
                </div>
                {eventEditing ? (
                    <div className={styles.buttons_right}>
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
                            onClick={onClickConfirm}
                        >
                            Save
                        </Button>
                    </div>
                ) : (
                    <div className={styles.buttons_right}>
                        <Button
                            className={styles.btn_edit}
                            theme={ButtonTheme.CLEAR}
                            onClick={() => setEventEditing(true)}
                        >
                            Edit
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
