import "@testing-library/jest-dom";
import { render, screen } from "shared/lib/TestUtil/TestUtil";
import { SidebarButtons } from "./SidebarButtons";

describe("Sidebar buttons", () => {
    it("Check sidebar buttons in document", () => {
        render(<SidebarButtons collapsed={false} />);
        const text = screen.getByTestId("sidebar_buttons");
        expect(text).toBeInTheDocument();
    });
    it("Check sidebar buttons collapsed class", () => {
        render(<SidebarButtons collapsed={true} />);
        const text = screen.getByTestId("sidebar_buttons");
        expect(text).toHaveClass(/collapsed/);
    });
});
