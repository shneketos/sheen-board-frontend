import { CalendarEvent } from "entities/Calendar/model/types/CalendarType";
import { memo } from "react";
import { formatDate } from "shared/lib/FormatDate/FormatDate";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import styles from "./OverviewUpcomingItem.module.scss";
export const OverviewUpcomingItem = memo((props: CalendarEvent) => {
    const { title, start, end, color } = props;
    const date = `${formatDate(start.toString())} -
        ${formatDate(end.toString())}`;
    const oneDay = formatDate(start.toString()) === formatDate(end.toString());
    return (
        <>
            <li className={styles.eventItem}>
                <Button theme={ButtonTheme.CLEAR} className={styles.btn}>
                    <div className={styles.top}>
                        <span
                            className={styles.color_box}
                            style={{ background: color }}
                        />
                        <p className={styles.eventItem_date}>
                            {oneDay ? formatDate(start.toString()) : date}
                        </p>
                    </div>
                    <span className={styles.eventItem_title}>{title}</span>
                </Button>
            </li>
        </>
    );
});
