import React from "react";
import styles from "./UserInfo.module.scss";
import { EditProfileForm } from "features/EditProfile";
import { useUserStore } from "entities/User";
export const UserInfo = () => {
    const user = useUserStore((state) => state.user);
    return (
        <div className={styles.profile}>
            <h1>Profile</h1>
            <EditProfileForm />
        </div>
    );
};
