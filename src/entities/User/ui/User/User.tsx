import React from "react";
import styles from "./User.module.scss";
import { UserInfo } from "../UserInfo/UserInfo";
import { Preference } from "../Preference/Preference";
import { Workspaces } from "../Workspaces/Workspaces";
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
                    <li
                        className={styles.list_item}
                        onClick={() => setTab("profile")}
                    >
                        Profile
                    </li>
                    <li
                        className={styles.list_item}
                        onClick={() => setTab("preference")}
                    >
                        Preference
                    </li>
                    <li
                        className={styles.list_item}
                        onClick={() => setTab("workspaces")}
                    >
                        Workspaces
                    </li>
                </ul>
            </div>
            <div className={styles.content}>{renderContent()}</div>
        </div>
    );
};
