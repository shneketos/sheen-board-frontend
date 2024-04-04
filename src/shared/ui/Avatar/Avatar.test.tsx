import "@testing-library/jest-dom";
import { render, screen } from "shared/lib/TestUtil/TestUtil";
import { Avatar, AvatarSize } from "./Avatar";
describe("Avatar", () => {
    it("Check avatar in document", () => {
        render(<Avatar size={AvatarSize.DEFAULT} src="" name="test" />);
        const avatar = screen.getByTestId("avatar");
        expect(avatar).toBeInTheDocument();
    });
    it("Check avatar default size", () => {
        render(<Avatar size={AvatarSize.DEFAULT} src="" name="test" />);
        const avatar = screen.getByTestId("avatar");
        expect(avatar).toHaveClass(/default/);
    });
    it("Check avatar large size", () => {
        render(<Avatar size={AvatarSize.LARGE} src="" name="test" />);
        const avatar = screen.getByTestId("avatar");
        expect(avatar).toHaveClass(/large/);
    });
    it("Check avatar without src", () => {
        render(<Avatar size={AvatarSize.LARGE} src="" name="test" />);
        const avatar = screen.getByTestId("name");
        expect(avatar).toHaveClass(/name/);
    });
    it("Check avatar with src", () => {
        render(
            <Avatar
                size={AvatarSize.LARGE}
                src="https://mimer.ru/content/ckfinder/userfiles/images/маленькая.jpeg"
                name="test"
            />
        );
        const avatar = screen.getByTestId("img");
        expect(avatar).toHaveClass(/img/);
    });
});
