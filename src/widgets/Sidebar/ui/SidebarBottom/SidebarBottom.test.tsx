import "@testing-library/jest-dom";
import { render, screen } from "shared/lib/TestUtil/TestUtil";
import { SidebarBottom } from "./SidebarBottom";
import { BrowserRouter } from "react-router-dom";

describe("Sidebar bottom", () => {
    it("Check sidebar bottom in document", () => {
        render(
            <BrowserRouter>
                <SidebarBottom collapsed={false} />
            </BrowserRouter>
        );
        const text = screen.getByTestId("sidebar_bottom");
        expect(text).toBeInTheDocument();
    });
    it("Check sidebar bottom collapsed class", () => {
        render(
            <BrowserRouter>
                <SidebarBottom collapsed={true} />
            </BrowserRouter>
        );
        const text = screen.getByTestId("sidebar_bottom");
        expect(text).toHaveClass(/collapsed/);
    });
});
