import "@testing-library/jest-dom";
import { render, screen } from "shared/lib/TestUtil/TestUtil";
import { InfoModal } from "./InfoModal";

describe("InfoModal", () => {
    it("Check infomodal in document", () => {
        render(<InfoModal>test</InfoModal>);
        const text = screen.getByText("test");
        expect(text).toBeInTheDocument();
    });
});
