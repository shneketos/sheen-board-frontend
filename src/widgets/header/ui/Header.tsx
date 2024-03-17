import styles from "./Header.module.scss";
import Slogo from "shared/assets/icons/Slogo.png";
import { memo } from "react";
import { AppLink } from "shared/ui/AppLink/AppLink";
import useAuthSelector from "entities/User/model/selector/useAuthSelector";
import { useUserStore } from "entities/User";

export const Header = memo(() => {
    const auth = useAuthSelector();
    const user = useUserStore((state) => state.user);
    const username = user !== null && user.name;
    return (
        <header className={styles.header} data-testid="header">
            <div className={styles.header_left}>
                <img src={Slogo} />
            </div>
            {auth ? (
                <div className={styles.header_right_Authed}>
                    <span className={styles.header_username}>{username}</span>
                    <div
                        className={styles.header_right_Authed_photo}
                    >{`${username[0]}`}</div>
                </div>
            ) : (
                <div className={styles.header_right_nonAuthed}>
                    <AppLink className={styles.signin} to="/signin">
                        Sign In
                    </AppLink>
                    <AppLink className={styles.signup} to="/signup">
                        Sign Up
                    </AppLink>
                </div>
            )}
        </header>
    );
});

export default Header;
