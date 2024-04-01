import { useThemes } from "app/providers/themeProvider";
import styles from "./ThemeSwitcher.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import MoonIcon from "shared/assets/icons/moon.svg?react";
import SunIcon from "shared/assets/icons/sun.svg?react";
import { Theme } from "app/providers/themeProvider/lib/ThemeContext";
import {
    NotificationTheme,
    useNotification,
} from "app/providers/notificationProvider";
export enum ThemeVars {
    DARK = "Dark",
    LIGHT = "Light",
}
interface themeProps {
    color: ThemeVars;
}
export const ThemeSwitcher = (props: themeProps) => {
    const { color } = props;
    const { setMessage, setNotificationTheme, setVisible } = useNotification();

    const { setTheme, theme } = useThemes();
    const onClickChangeTheme = () => {
        if (color === ThemeVars.DARK && theme === Theme.LIGHT) {
            setTheme(Theme.DARK);
        }
        if (color === ThemeVars.LIGHT && theme === Theme.DARK) {
            setTheme(Theme.LIGHT);
        }
        setVisible(true);
        setMessage("Theme switched");
        setNotificationTheme(NotificationTheme.SUCCESS);
    };
    const isDarkActive = theme === Theme.DARK && color === ThemeVars.DARK;
    const isLightActive = theme === Theme.LIGHT && color === ThemeVars.LIGHT;

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={`${styles.themeSwitcher} ${styles[color]} ${
                isDarkActive || isLightActive ? styles.active : ""
            }`}
            onClick={onClickChangeTheme}
        >
            {color === ThemeVars.DARK ? (
                <MoonIcon widths={75} height={75} className={styles.icon} />
            ) : (
                <SunIcon widths={75} height={75} className={styles.icon} />
            )}
            <p className={styles.title}>{color}</p>
            <span
                className={styles.desc}
            >{`Toggle ${color} interface theme`}</span>
        </Button>
    );
};
