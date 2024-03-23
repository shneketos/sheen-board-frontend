import React from "react";
import styles from "./Preference.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { ThemeVars } from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
export const Preference = () => {
    return (
        <div className={styles.preference}>
            <h1>Preference</h1>
            <div className={styles.themes}>
                <ThemeSwitcher color={ThemeVars.DARK} />
                <ThemeSwitcher color={ThemeVars.LIGHT} />
            </div>
        </div>
    );
};
