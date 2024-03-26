import styles from "./UserInfo.module.scss";
import { EditProfileForm } from "features/EditProfile";
export const UserInfo = () => {
    return (
        <div className={styles.profile}>
            <h1>Profile</h1>
            <EditProfileForm />
        </div>
    );
};
