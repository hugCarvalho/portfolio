import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
import { MemoryRouter } from "react-router-dom";

describe("NotFound renders correctly", () => {
  test("button back to home page exists", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const button = screen.getByRole("link", { name: /back to home page/i });
    expect(button.href).toContain("projects");
  });
  test("should match snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
