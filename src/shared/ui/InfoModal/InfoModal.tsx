import React, { type ReactNode } from "react";
import styles from "./InfoModal.module.scss";

interface InfoModalProps {
    children: ReactNode;
}

export const InfoModal = (props: InfoModalProps) => {
    const { children } = props;
    return (
        <div className={styles.info}>
            <div className={styles.info_wrapper}>{children}</div>
        </div>
    );
};
