import "@testing-library/jest-dom";
import { render, screen } from "shared/lib/TestUtil/TestUtil";
import { SidebarUpper } from "./SidebarUpper";
import { BrowserRouter } from "react-router-dom";

describe("Sidebar upper", () => {
    it("Check sidebar upper in document", () => {
        render(
            <BrowserRouter>
                <SidebarUpper collapsed={false} />
            </BrowserRouter>
        );
        const text = screen.getByTestId("sidebar_upper");
        expect(text).toBeInTheDocument();
    });
});
