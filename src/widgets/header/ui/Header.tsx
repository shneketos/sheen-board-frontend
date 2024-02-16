import styles from "./Header.module.scss";
import Slogo from "shared/assets/icons/Slogo.png";
import Settings from "shared/assets/icons/settings.svg";
import Logout from "shared/assets/icons/logout.svg";
import React from "react";
import { AppLink } from "shared/ui/AppLink/AppLink";

export const Header = ({ authed }: { authed: boolean }) => {
    const userName = "Alisson";
    const initials = userName.split(" ");
    const [open, setOpen] = React.useState(false);
    return (
        <header className={styles.header} data-testid="header">
            <div className={styles.header_left}>
                <img src={Slogo} />
            </div>
            {authed ? (
                <div className={styles.header_right_Authed}>
                    <span className={styles.header_username}>{userName}</span>
                    <div
                        data-testid="header_toggle_btn"
                        onClick={() => {
                            setOpen(!open);
                        }}
                        className={styles.header_right_Authed_photo}
                    >{`${initials[0][0]}`}</div>
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
};

export default Header;
