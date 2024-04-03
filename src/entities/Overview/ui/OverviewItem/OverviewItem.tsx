import React from "react";
import styles from "./OverviewItem.module.scss";
import LinkIcon from "shared/assets/icons/link.svg?react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useKanbanStore } from "entities/KanbanBoard/model/store/KanbanStore";
import { useBacklogStore } from "entities/Backlog/model/store/BacklogStore";
import { useNavigate, useParams } from "react-router-dom";
import { OverviewUpcomingItem } from "../OverviewUpcomingItem/OverviewUpcomingItem";
import { useCalendarStore } from "entities/Calendar/model/store/CalendarStore";

export enum OveriewItemType {
    KANBAN = "Kanban",
    BACKLOG = "Backlog",
    CALENDAR = "Calendar",
    MEMBERS = "Members",
}
interface OverviewProps {
    type: OveriewItemType;
}

export const OverviewItem = (props: OverviewProps) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { type } = props;
    const kanban = useKanbanStore((state) => state.kanban);
    const KanbanRowsCount = kanban.lists.length;
    const backlog = useBacklogStore((state) => state.backlog);
    const BacklogSprintsCount = backlog.sprints.length;
    const calendar = useCalendarStore((state) => state.calendar);
    const getKanbanCards = () => {
        let totalCards = 0;
        kanban.lists.forEach((item) => {
            if ("tasks" in item && Array.isArray(item.tasks)) {
                totalCards += item.tasks.length;
            }
        });

        return totalCards;
    };
    const getKanbanPriorityCards = () => {
        const countByPriority = {
            Low: 0,
            Medium: 0,
            High: 0,
        };

        kanban.lists.forEach((item) => {
            if ("tasks" in item && Array.isArray(item.tasks)) {
                item.tasks.forEach((task) => {
                    switch (task.priority) {
                        case "Low":
                            countByPriority.Low++;
                            break;
                        case "Medium":
                            countByPriority.Medium++;
                            break;
                        case "High":
                            countByPriority.High++;
                            break;
                        default:
                            break;
                    }
                });
            }
        });

        return countByPriority;
    };
    const getBacklogTasks = () => {
        let totalTasks = 0;
        backlog.sprints.forEach((item) => {
            if ("tasks" in item && Array.isArray(item.tasks)) {
                totalTasks += item.tasks.length;
            }
        });

        return totalTasks;
    };
    const getBacklogTasksStatus = () => {
        const countByPriority = {
            Not: 0,
            In: 0,
            Comp: 0,
        };

        backlog.sprints.forEach((item) => {
            if ("tasks" in item && Array.isArray(item.tasks)) {
                item.tasks.forEach((task) => {
                    switch (task.status) {
                        case "Not Started":
                            countByPriority.Not++;
                            break;
                        case "In Progress":
                            countByPriority.In++;
                            break;
                        case "Completed":
                            countByPriority.Comp++;
                            break;
                        default:
                            break;
                    }
                });
            }
        });

        return countByPriority;
    };
    const onClickRedirect = () => {
        if (type === OveriewItemType.KANBAN) {
            navigate(`/dashboard/${id}/kanban`);
        }
        if (type === OveriewItemType.BACKLOG) {
            navigate(`/dashboard/${id}/backlog`);
        }
        if (type === OveriewItemType.CALENDAR) {
            navigate(`/dashboard/${id}/calendar`);
        }
        if (type === OveriewItemType.MEMBERS) {
            navigate(`/dashboard/${id}/members`);
        }
    };
    return (
        <div className={styles.item}>
            <div className={styles.item_top}>
                <p className={styles.item_top_title}>{type}</p>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={styles.icon}
                    onClick={onClickRedirect}
                >
                    <LinkIcon />
                </Button>
            </div>
            {type === OveriewItemType.KANBAN && (
                <>
                    <div className={styles.content}>
                        <ul className={styles.stats}>
                            <li className={styles.stats_item}>
                                <p className={styles.stats_item_title}>Rows</p>
                                <span className={styles.stats_item_value}>
                                    {KanbanRowsCount}
                                </span>
                            </li>
                            <li className={styles.stats_item}>
                                <p className={styles.stats_item_title}>Cards</p>
                                <span className={styles.stats_item_value}>
                                    {getKanbanCards()}
                                </span>
                            </li>
                        </ul>
                        <ul className={styles.priority}>
                            <li className={styles.priority_item}>
                                <p className={styles.priority_item_title}>
                                    Low priority
                                </p>
                                <span
                                    className={`${styles.priority_item_value} ${styles.Low}`}
                                >
                                    {getKanbanPriorityCards().Low}
                                </span>
                            </li>
                            <li className={styles.priority_item}>
                                <p className={styles.priority_item_title}>
                                    Medium priority
                                </p>
                                <span
                                    className={`${styles.priority_item_value} ${styles.Medium}`}
                                >
                                    {getKanbanPriorityCards().Medium}
                                </span>
                            </li>
                            <li className={styles.priority_item}>
                                <p className={styles.priority_item_title}>
                                    High priority
                                </p>
                                <span
                                    className={`${styles.priority_item_value} ${styles.High}`}
                                >
                                    {getKanbanPriorityCards().High}
                                </span>
                            </li>
                        </ul>
                    </div>
                </>
            )}
            {type === OveriewItemType.BACKLOG && (
                <>
                    <div className={styles.content}>
                        <ul className={styles.stats}>
                            <li className={styles.stats_item}>
                                <p className={styles.stats_item_title}>
                                    Sprints
                                </p>
                                <span className={styles.stats_item_value}>
                                    {BacklogSprintsCount}
                                </span>
                            </li>
                            <li className={styles.stats_item}>
                                <p className={styles.stats_item_title}>Tasks</p>
                                <span className={styles.stats_item_value}>
                                    {getBacklogTasks()}
                                </span>
                            </li>
                        </ul>
                        <ul className={styles.priority}>
                            <li className={styles.priority_item}>
                                <p className={styles.priority_item_title}>
                                    Not started
                                </p>
                                <span
                                    className={`${styles.priority_item_value}`}
                                >
                                    {getBacklogTasksStatus().Not}
                                </span>
                            </li>
                            <li className={styles.priority_item}>
                                <p className={styles.priority_item_title}>
                                    In Progress
                                </p>
                                <span
                                    className={`${styles.priority_item_value}`}
                                >
                                    {getBacklogTasksStatus().In}
                                </span>
                            </li>
                            <li className={styles.priority_item}>
                                <p className={styles.priority_item_title}>
                                    Completed
                                </p>
                                <span
                                    className={`${styles.priority_item_value}`}
                                >
                                    {getBacklogTasksStatus().Comp}
                                </span>
                            </li>
                        </ul>
                    </div>
                </>
            )}
            {type === OveriewItemType.CALENDAR && (
                <>
                    <div className={styles.upcoming_events}>
                        <ul className={styles.events}>
                            {calendar !== null &&
                            calendar.events.length === 0 ? (
                                <span className={styles.noevents}>
                                    No events{" "}
                                </span>
                            ) : (
                                calendar.events
                                    .sort(
                                        (a, b) =>
                                            new Date(a.start).getTime() -
                                            new Date(b.start).getTime()
                                    )
                                    .map((item) => (
                                        <OverviewUpcomingItem
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            start={item.start}
                                            end={item.end}
                                            color={item.color}
                                            allDay={item.allDay}
                                            desc={item.desc}
                                        />
                                    ))
                            )}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};
