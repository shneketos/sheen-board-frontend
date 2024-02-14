import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  test("Test render", () => {
    render(<Header authed={true} />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
  test("Test header authed modal", () => {
    render(<Header authed={true} />);
    const modalButton = screen.getByTestId("header_toggle_btn");
    expect(screen.getByTestId("header")).toBeInTheDocument();
    fireEvent.click(modalButton);
    expect(screen.getByTestId("header_modal")).toBeInTheDocument();
  });
});
