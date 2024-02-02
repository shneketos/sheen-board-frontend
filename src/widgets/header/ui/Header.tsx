import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

import Slogo from "shared/assets/icons/Slogo.png";
import Settings from "shared/assets/icons/settings.svg";
import Logout from "shared/assets/icons/logout.svg";

export const Header = ({ authed }: { authed: boolean }) => {
  const userName = "Alisson HHHHhewywy";
  const initials = userName.split(" ");
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <img src={Slogo} />
      </div>
      {authed ? (
        <div className={styles.header_right_Authed}>
          <div
            className={styles.header_right_Authed_photo}
          >{`${initials[0][0]}${initials[1][0]}`}</div>
          <span className={styles.header_right_Authed_name}>{userName}</span>
          <Settings />
          <Logout />
        </div>
      ) : (
        <div className={styles.header_right_nonAuthed}>
          <Link className={styles.signin} to="/auth/signin">
            Sign In
          </Link>
          <Link className={styles.signup} to="/auth/signup">
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};
export default Header;
