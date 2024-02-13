import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  DEFAULT = "default",
  CLEAR = "clear",
  REGISTER = "register",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}
export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.DEFAULT,
    ...otherProps
  } = props;
  return (
    <button
      className={` ${styles.button} ${styles[theme]} ${
        className ? className : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
