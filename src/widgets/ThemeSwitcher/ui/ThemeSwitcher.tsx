import { useThemes } from "app/providers/themeProvider";
import styles from "./ThemeSwitcher.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

export const ThemeSwitcher = () => {
    const { toggleTheme } = useThemes();

    return (
        <Button
            data-testid="themeswitcher"
            className={styles.ThemeSwitcher}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            TOGGLESS
        </Button>
    );
};
