import React, { FC, ReactElement } from "react";
import styles from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
}
export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      {...otherProps}
      className={`${styles.AppLink} ${styles[theme]} ${
        className ? className : ""
      }`}
    >
      {children}
    </Link>
  );
};
