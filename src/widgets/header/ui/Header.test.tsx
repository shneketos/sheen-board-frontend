import "@testing-library/jest-dom";
import { render, screen } from "shared/lib/TestUtil/TestUtil";
import { Header } from "..";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
    it("Check non authed header in document", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const text = screen.getByTestId("header");
        expect(text).toBeInTheDocument();
    });
});
