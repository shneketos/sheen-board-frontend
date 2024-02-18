import React, { type ReactNode } from "react";
import styles from "./InfoModal.module.scss";

interface InfoModalProps {
    children: ReactNode;
    className?: string;
}

export const InfoModal = (props: InfoModalProps) => {
    const { children, className } = props;
    return (
        <div className={`${styles.info} ${className}`}>
            <div className={styles.info_wrapper}>{children}</div>
        </div>
    );
};
