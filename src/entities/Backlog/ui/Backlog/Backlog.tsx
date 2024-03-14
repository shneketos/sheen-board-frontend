import styles from "./Backlog.module.scss";
import { BacklogList } from "../BacklogList/BacklogList";
import { BacklogAddSprint } from "../BacklogAddSprint/BacklogAddSprint";
export const Backlog = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const sprintsData = [
        {
            id: 1,
            title: "Спринт 1",
            tasks: [
                {
                    taskId: 1,
                    title: "Задача 1",
                    priority: "High",
                    storypoints: 35,
                    status: "Completed",
                },
                {
                    taskId: 2,
                    title: "Задача 2",
                    priority: "Medium",
                    storypoints: 20,
                    status: "In Progress",
                },
                {
                    taskId: 3,
                    title: "Задача 3",
                    priority: "Low",
                    storypoints: 15,
                    status: "Not Started",
                },
            ],
        },
        {
            id: 2,
            title: "Спринт 2",
            tasks: [
                {
                    taskId: 4,
                    title: "Задача 4",
                    priority: "Medium",
                    storypoints: 25,
                    status: "Completed",
                },
                {
                    taskId: 5,
                    title: "Задача 5",
                    priority: "High",
                    storypoints: 40,
                    status: "In Progress",
                },
            ],
        },
    ];

    return (
        <div className={styles.backlog_content}>
            {sprintsData.map((sprint) => (
                <BacklogList
                    key={sprint.id}
                    id={sprint.id}
                    title={sprint.title}
                    tasks={sprint.tasks}
                />
            ))}
            <BacklogAddSprint />
        </div>
    );
};
