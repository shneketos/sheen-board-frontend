import { memo, type ButtonHTMLAttributes, type FC } from "react";
import styles from "./Button.module.scss";

export enum ButtonTheme {
    DEFAULT = "default",
    CLEAR = "clear",
    REGISTER = "register",
}

type ButtonProps = {
    theme?: ButtonTheme;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        theme = ButtonTheme.DEFAULT,
        ...otherProps
    } = props;
    return (
        <button
            className={` ${styles.button} ${styles[theme]} ${className || ""}`}
            {...otherProps}
        >
            {children}
        </button>
    );
});
