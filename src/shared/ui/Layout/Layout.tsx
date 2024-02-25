import { type ReactNode } from "react";
import styles from "./Layout.module.scss";
import { Sidebar } from "widgets/Sidebar";
interface LayoutProps {
    children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
    const { children } = props;
    return (
        <>
            <Sidebar />
            <section className={styles.content_wrapper}>{children}</section>
        </>
    );
};
