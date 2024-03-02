import "@testing-library/jest-dom";
import { render, screen } from "shared/lib/TestUtil/TestUtil";
import { PageLoader } from "./PageLoader";

describe("PageLoader", () => {
    it("Check page loader in document", () => {
        render(<PageLoader />);
        const text = screen.getByTestId("pageLoader");
        expect(text).toBeInTheDocument();
    });
});
