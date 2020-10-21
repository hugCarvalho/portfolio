import React from "react";
import { render, screen } from "@testing-library/react";
import RenderContact from "./RenderContact";

test("should match snapshot", () => {
  const { container } = render(<RenderContact />);
  expect(container).toMatchSnapshot();
});

test("email link is correct", () => {
  render(<RenderContact />);
  const mailLink = screen.getByRole("link", { name: /hugo\.berlinlife@gmail\.com/i });
  expect(mailLink.href).toBe("mailto:hugo.berlinlife@gmail.com");
});
