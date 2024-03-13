import { type ReactNode, useMemo, useState } from "react";
import { Theme, ThemeContext } from "../lib/ThemeContext";
import { LOCALSTORAGE_THEME_KEY } from "shared/const/localstorage";

const defaultTheme =
    (localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
