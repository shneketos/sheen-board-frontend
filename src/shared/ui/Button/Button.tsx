import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  DISABLED = "disabled",
  REGISTER = "register",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}
export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
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
