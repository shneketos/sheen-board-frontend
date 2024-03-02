import "@testing-library/jest-dom";
import { render, screen } from "shared/lib/TestUtil/TestUtil";
import { ThemeSwitcher } from "..";
import { ThemeProvider } from "app/providers/themeProvider";

describe("Themeswitcher", () => {
    it("Check Theme switcher in document", () => {
        render(
            <ThemeProvider>
                <ThemeSwitcher />
            </ThemeProvider>
        );
        const text = screen.getByTestId("themeswitcher");
        expect(text).toBeInTheDocument();
    });
});
