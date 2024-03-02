import "@testing-library/jest-dom";
import { render, screen } from "shared/lib/TestUtil/TestUtil";
import { Footer } from "..";

describe("Footer", () => {
    it("Check footer in document", () => {
        render(<Footer />);
        const text = screen.getByTestId("footer");
        expect(text).toBeInTheDocument();
    });
});
