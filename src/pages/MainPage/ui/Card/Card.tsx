import React from "react";
import styles from "./Card.module.scss";
export const Card = ({ title, desc, isActive, onClick }) => {
    return (
        <li
            className={`${styles.card} ${isActive ? styles.active : ""}`}
            onClick={onClick}
        >
            <p className={styles.title}>{title}</p>
            <span className={styles.desc}>{desc}</span>
        </li>
    );
};
