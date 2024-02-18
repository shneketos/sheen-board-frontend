import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import React from "react";

describe("Sidebar", () => {
    test("Test render", () => {
        render(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("Test sidebar toggle", () => {
        render(<Sidebar />);
        const toggleButton = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});