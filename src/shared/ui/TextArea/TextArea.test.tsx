import "@testing-library/jest-dom";
import { render, screen } from "shared/lib/TestUtil/TestUtil";
import { TextArea } from "./TextArea";

describe("TextArea", () => {
    it("Check textarea in document", () => {
        render(<TextArea value="12424" onChange={undefined} />);
        const text = screen.getByTestId("textarea");
        expect(text).toBeInTheDocument();
    });
});
