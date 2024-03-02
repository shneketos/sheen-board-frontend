import "@testing-library/jest-dom";
import { render, screen } from "shared/lib/TestUtil/TestUtil";
import { Modal } from "./Modal";

describe("Modal", () => {
    it("Check modal in document", () => {
        render(
            <Modal isOpen={true} onClose={undefined}>
                test
            </Modal>
        );
        const text = screen.getByTestId("modal");
        expect(text).toBeInTheDocument();
    });
    it("Check modal opened", () => {
        render(
            <Modal isOpen={true} onClose={undefined}>
                test
            </Modal>
        );
        const text = screen.getByTestId("modal");
        expect(text).toHaveClass(/opened/);
    });
});
