import "@testing-library/jest-dom";
import { render, screen } from "shared/lib/TestUtil/TestUtil";
import { Button, ButtonTheme } from "./Button";
describe("Button", () => {
    it("Check button in document", () => {
        render(<Button>test</Button>);
        const text = screen.getByText("test");
        expect(text).toBeInTheDocument();
    });
    it("Check button class", () => {
        render(<Button>test</Button>);
        const text = screen.getByText("test");
        expect(text).toHaveClass(/button/);
    });
    it("Check button clear theme", () => {
        render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
        const text = screen.getByText("test");
        expect(text).toHaveClass(/clear/);
    });
});
