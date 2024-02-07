import { useThemes } from "app/providers/themeProvider";
import React from "react";
import styles from "./ThemeSwitcher.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

export const ThemeSwitcher = () => {
  const { toggleTheme } = useThemes();

  return (
    <Button
      className={styles.ThemeSwitcher}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      TOGGLESS
    </Button>
  );
};
