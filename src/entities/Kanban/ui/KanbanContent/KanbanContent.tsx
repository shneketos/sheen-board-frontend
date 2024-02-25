import React from "react";
import styles from "./KanbanContent.module.scss";
import { KanbanRowAddRow } from "../KanbanRowStyle/KanbanRowAddRow/KanbanRowAddRow";
import { KanbanRow } from "../KanbanRowStyle/KanbanRow/KanbanRow";

export const KanbanContent = () => {
    const kanbanData = [
        {
            id: 1,
            title: "To Do",
            cards: [
                {
                    id: 101,
                    title: "Task 1",
                    desc: "Complete feature Aasgasg \n aasgasasgasgasgasgagasgasgasgasgasg\naasgasasgasgasgasgagasgasgasgasgasg aasgasasgasgasgasgagasgasgasgasgasg",
                    date: formatToMonthDay(new Date("2024-02-20")),
                    priority: "medium",
                },
                {
                    id: 102,
                    title: "Task 2",
                    desc: "Review code for bug fixes",
                    date: formatToMonthDay(new Date("2024-02-22")),
                    priority: "high",
                },
                {
                    id: 103,
                    title: "Task 3",
                    desc: "Create user documentation",
                    date: formatToMonthDay(new Date("2024-02-25")),
                    priority: "low",
                },
            ],
        },
        {
            id: 2,
            title: "In Progress",
            cards: [
                {
                    id: 201,
                    title: "Task 4",
                    desc: "Implement login functionality",
                    date: formatToMonthDay(new Date("2024-02-21")),
                    priority: "high",
                },
                {
                    id: 202,
                    title: "Task 5",
                    desc: "Optimize database queries",
                    date: formatToMonthDay(new Date("2024-02-24")),
                    priority: "medium",
                },
                {
                    id: 203,
                    title: "Task 6",
                    desc: "Fix UI responsiveness issues",
                    date: formatToMonthDay(new Date("2024-02-27")),
                    priority: "low",
                },
            ],
        },
        {
            id: 3,
            title: "Done",
            cards: [
                {
                    id: 301,
                    title: "Task 7",
                    desc: "Deploy application to production",
                    date: formatToMonthDay(new Date("2024-02-23")),
                    priority: "low",
                },
                {
                    id: 302,
                    title: "Task 8",
                    desc: "Conduct final testing",
                    date: formatToMonthDay(new Date("2024-02-26")),
                    priority: "medium",
                },
                {
                    id: 303,
                    title: "Task 9",
                    desc: "Prepare release notes",
                    date: formatToMonthDay(new Date("2024-02-28")),
                    priority: "high",
                },
            ],
        },
    ];

    function formatToMonthDay(date: any) {
        const month = date.toLocaleString("en-us", { month: "short" });
        const day = date.getDate();
        return `${month} ${day}`;
    }
    return (
        <div className={styles.kanban_content}>
            {kanbanData.map((row) => (
                <KanbanRow
                    key={row.id}
                    title={row.title}
                    id={row.id}
                    cards={row.cards}
                />
            ))}
            <KanbanRowAddRow />
        </div>
    );
};
