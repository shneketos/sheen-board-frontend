import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

import Slogo from "shared/assets/icons/Slogo.png";
import Settings from "shared/assets/icons/settings.svg";
import Logout from "shared/assets/icons/logout.svg";
import React from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

export const Header = ({ authed }: { authed: boolean }) => {
  const userName = "Alisson";
  const initials = userName.split(" ");
  const [open, setOpen] = React.useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <img src={Slogo} />
      </div>
      {authed ? (
        <div className={styles.header_right_Authed}>
          <div
            onClick={() => setOpen(!open)}
            className={styles.header_right_Authed_photo}
          >{`${initials[0][0]}`}</div>
          {open && (
            <div
              onMouseLeave={() => setOpen(false)}
              className={styles.header_right_modal}
            >
              <div className={styles.header_right_modal_wrapper}>
                <span className={styles.header_right_modal_name}>
                  {userName}
                </span>
                <div className={styles.header_right_modal_buttons}>
                  <button
                    className={`${styles.header_right_modal_btn} ${styles.settings_btn}`}
                  >
                    <Settings />
                    <span className={styles.header_right_modal_btn_settings}>
                      Settings
                    </span>
                  </button>
                  <button
                    className={`${styles.header_right_modal_btn} ${styles.logout_btn}`}
                  >
                    <Logout />
                    <span className={styles.header_right_modal_btn_logout}>
                      Logout
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
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
