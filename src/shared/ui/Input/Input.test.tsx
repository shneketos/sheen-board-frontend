import "@testing-library/jest-dom";
import { render, screen } from "shared/lib/TestUtil/TestUtil";
import Input, { InputTheme } from "./Input";

describe("Input", () => {
    it("Check input in document", () => {
        render(<Input />);
        const text = screen.getByTestId("input");
        expect(text).toBeInTheDocument();
    });
    it("Check input default theme", () => {
        render(<Input theme={InputTheme.DEFAULT} />);
        const text = screen.getByTestId("input");
        expect(text).toHaveClass(/default/);
    });
    it("Check input auth theme", () => {
        render(<Input theme={InputTheme.AUTH} />);
        const text = screen.getByTestId("input");
        expect(text).toHaveClass(/auth/);
    });
});
