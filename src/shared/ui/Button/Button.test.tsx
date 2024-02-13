import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";
describe("Button", () => {
  test("Test render", () => {
    render(<Button>test</Button>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
  test("Test class clear", () => {
    render(<Button theme={ButtonTheme.CLEAR}>clear button</Button>);
    expect(screen.getByText("clear button")).toHaveClass("clear");
    screen.debug();
  });
});
