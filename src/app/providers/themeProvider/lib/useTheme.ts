import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export const useThemes = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    if (!theme || !setTheme) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};
