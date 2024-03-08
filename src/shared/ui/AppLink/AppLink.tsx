import { type FC } from "react";
import styles from "./AppLink.module.scss";
import { Link, type LinkProps } from "react-router-dom";
export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

type AppLinkProps = {
    theme?: AppLinkTheme;
} & LinkProps;
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
            className={`${styles.AppLink} ${styles[theme]} ${className || ""}`}
        >
            {children}
        </Link>
    );
};
