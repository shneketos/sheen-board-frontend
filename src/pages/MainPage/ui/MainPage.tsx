import React from "react";
import { Card } from "./Card/Card";
import styles from "./MainPage.module.scss";
import { Kanban } from "./Content/Kanban";
import { Backlog } from "./Content/Backlog";
import { Calendar } from "./Content/Calendar";
export const MainPage = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const handleCardClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    const items = [
        {
            title: "Kanban",
            desc: "Simple, flexible, and powerful. All it takes are boards, lists,and cards to get a clear view of who’s doing what and what needs to get done",
        },
        {
            title: "Backlog",
            desc: "Backlog is a place where all ideas, tasks, and features are collected and prioritized before being worked on.",
        },
        {
            title: "Calendar",
            desc: "Calendar allows you to visualize tasks and deadlines over time, providing a structured overview of upcoming events, meetings, and deadlines.",
        },
    ];
    return (
        <>
            <div className={styles.main}>
                <h1 className={styles.sheen}>Sheen Board</h1>
                <div className={styles.content}>
                    <div className={styles.content_left}>
                        <ul className={styles.list}>
                            {items.map((item, index) => (
                                <Card
                                    title={item.title}
                                    desc={item.desc}
                                    key={index}
                                    isActive={index === activeIndex}
                                    onClick={() => handleCardClick(index)}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className={styles.content_right}>
                        {activeIndex === 0 && <Kanban />}
                        {activeIndex === 1 && <Backlog />}
                        {activeIndex === 2 && <Calendar />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;
