import { LOCALSTORAGE_THEME_KEY } from "shared/const/localstorage";
import { Theme, ThemeContext } from "./ThemeContext";
import React, { useContext } from "react";

export const useThemes = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    if (!theme || !setTheme) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
    };
    React.useEffect(() => {
        localStorage.setItem(LOCALSTORAGE_THEME_KEY, theme);
        document.body.className = theme;
    }, [theme]);
    return {
        theme,
        toggleTheme,
        setTheme,
    };
};
