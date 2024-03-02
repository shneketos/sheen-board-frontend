import "@testing-library/jest-dom";
import { render, screen } from "shared/lib/TestUtil/TestUtil";
import { AppLink, AppLinkTheme } from "./AppLink";
import { BrowserRouter } from "react-router-dom";

describe("AppLink", () => {
    it("Check AppLink in document", () => {
        render(
            <BrowserRouter>
                <AppLink to={"/"}>link</AppLink>
            </BrowserRouter>
        );
        const text = screen.getByText("link");
        expect(text).toBeInTheDocument();
    });
    it("Check AppLink primary theme", () => {
        render(
            <BrowserRouter>
                <AppLink to={"/"} theme={AppLinkTheme.PRIMARY}>
                    link
                </AppLink>
            </BrowserRouter>
        );
        const text = screen.getByText("link");
        expect(text).toHaveClass(/primary/);
    });
    it("Check AppLink secondary theme", () => {
        render(
            <BrowserRouter>
                <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>
                    link
                </AppLink>
            </BrowserRouter>
        );
        const text = screen.getByText("link");
        expect(text).toHaveClass(/secondary/);
    });
});
