import React from "react";
import styles from "./BacklogContent.module.scss";
import { BacklogList } from "../BacklogList/BacklogList";
export const BacklogContent = () => {
    const sprintsData = [
        {
            id: 1,
            title: "Спринт 1",
            tasks: {
                task1: {
                    title: "Задача 1",
                    priority: "high",
                    storypoints: 35,
                    status: "done",
                },
                task2: {
                    title: "Задача 2",
                    priority: "medium",
                    storypoints: 20,
                    status: "in progress",
                },
                task3: {
                    title: "Задача 3",
                    priority: "low",
                    storypoints: 15,
                    status: "to do",
                },
            },
        },
        {
            id: 2,
            title: "Спринт 2",
            tasks: {
                task4: {
                    title: "Задача 4",
                    priority: "medium",
                    storypoints: 25,
                    status: "done",
                },
                task5: {
                    title: "Задача 5",
                    priority: "high",
                    storypoints: 40,
                    status: "in progress",
                },
            },
        },
    ];
    return (
        <div className={styles.backlog_content}>
            <BacklogList />
        </div>
    );
};
