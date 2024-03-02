import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "shared/lib/TestUtil/TestUtil";
import { Sidebar } from "./Sidebar";
import { BrowserRouter } from "react-router-dom";

describe("Sidebar", () => {
    it("Check sidebar in document", () => {
        render(
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>
        );
        const text = screen.getByTestId("sidebar");
        expect(text).toBeInTheDocument();
    });
    it("Check sidebar collapsed class", () => {
        render(
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>
        );
        const text = screen.getByTestId("sidebar");
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(text).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(text).toHaveClass(/collapsed/);
    });
});
