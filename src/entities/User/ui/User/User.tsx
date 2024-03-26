import React from "react";
import styles from "./User.module.scss";
import { UserInfo } from "../UserInfo/UserInfo";
import { Preference } from "../Preference/Preference";
import { Workspaces } from "../Workspaces/Workspaces";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
export const User = () => {
    const [tab, setTab] = React.useState("profile");
    const renderContent = () => {
        switch (tab) {
            case "profile":
                return <UserInfo />;
            case "preference":
                return <Preference />;
            case "workspaces":
                return <Workspaces />;
            default:
                return null;
        }
    };
    return (
        <div className={styles.user}>
            <div className={styles.navbar}>
                <ul className={styles.list}>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        className={`${styles.list_item} ${
                            tab === "profile" ? styles.active : ""
                        }`}
                        onClick={() => setTab("profile")}
                    >
                        <li>Profile</li>
                    </Button>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        className={`${styles.list_item} ${
                            tab === "preference" ? styles.active : ""
                        }`}
                        onClick={() => setTab("preference")}
                    >
                        <li>Preference</li>
                    </Button>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        className={`${styles.list_item} ${
                            tab === "workspaces" ? styles.active : ""
                        }`}
                        onClick={() => setTab("workspaces")}
                    >
                        <li>Workspaces</li>
                    </Button>
                </ul>
            </div>
            <div className={styles.content}>{renderContent()}</div>
        </div>
    );
};
