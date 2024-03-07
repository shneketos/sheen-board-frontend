import { type ReactNode } from "react";
import styles from "./Layout.module.scss";
import { Sidebar } from "widgets/Sidebar";
interface LayoutProps {
    children: ReactNode;
    off?: boolean;
}

export const Layout = (props: LayoutProps) => {
    const { children, off } = props;
    return (
        <>
            {!off && <Sidebar />}
            <section className={styles.content_wrapper}>{children}</section>
        </>
    );
};
