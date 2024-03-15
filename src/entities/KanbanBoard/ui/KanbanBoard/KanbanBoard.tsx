import styles from "./KanbanBoard.module.scss";
import { KanbanRowAddRow } from "../KanbanRowAddRow/KanbanRowAddRow";
import { KanbanRow } from "../KanbanRow/KanbanRow";
import { formatDate } from "shared/lib/FormatDate/FormatDate";
import { memo } from "react";

export const KanbanBoard = memo(() => {
    const kanbanData = [
        {
            id: 1,
            title: "To Do",
            cards: [
                {
                    id: 101,
                    title: "Task 1",
                    desc: "Complete feature Aasgasg \n aasgasasgasgasgasgagasgasgasgasgasg\naasgasasgasgasgasgagasgasgasgasgasg aasgasasgasgasgasgagasgasgasgasgasg",
                    date: formatDate(new Date("2024-02-23")),
                    priority: "Medium",
                },
                {
                    id: 102,
                    title: "Task 2",
                    desc: "Review code for bug fixes",
                    date: formatDate(new Date("2024-02-22")),
                    priority: "High",
                },
                {
                    id: 103,
                    title: "Task 3",
                    desc: "Create user documentation",
                    date: formatDate(new Date("2024-02-25")),
                    priority: "Low",
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
                    date: formatDate(new Date("2024-02-21")),
                    priority: "High",
                },
                {
                    id: 202,
                    title: "Task 5",
                    desc: "Optimize database queries",
                    date: formatDate(new Date("2024-02-24")),
                    priority: "Medium",
                },
                {
                    id: 203,
                    title: "Task 6",
                    desc: "Fix UI responsiveness issues",
                    date: formatDate(new Date("2024-02-27")),
                    priority: "Low",
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
                    date: formatDate(new Date("2024-02-23")),
                    priority: "Low",
                },
                {
                    id: 302,
                    title: "Task 8",
                    desc: "Conduct final testing",
                    date: formatDate(new Date("2024-02-26")),
                    priority: "Medium",
                },
                {
                    id: 303,
                    title: "Task 9",
                    desc: "Prepare release notes",
                    date: formatDate(new Date("2024-02-28")),
                    priority: "High",
                },
            ],
        },
    ];
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
});
