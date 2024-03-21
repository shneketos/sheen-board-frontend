import { memo } from "react";
import styles from "./UpcomingEventItem.module.scss";
import { UpcomingEventItemProps } from "entities/Calendar/model/types/CalendarType";
import { formatDate } from "shared/lib/FormatDate/FormatDate";
export const UpcomingEventItem = memo((props: UpcomingEventItemProps) => {
    const { title, start, end, color } = props;
    const date = `${formatDate(start.toString())} -
    ${formatDate(end.toString())}`;
    return (
        <li className={styles.eventItem}>
            <div className={styles.top}>
                <span
                    className={styles.color_box}
                    style={{ background: color }}
                />
                <p className={styles.eventItem_date}>{date}</p>
            </div>
            <span className={styles.eventItem_title}>{title}</span>
        </li>
    );
});
