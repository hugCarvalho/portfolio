import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyPic from "./MyPic";

test("should render the right pic with alt text ", () => {
  render(<MyPic />, { wrapper: BrowserRouter });
  const photo = screen.getByRole("img", { name: /about me/i });
  screen.getByAltText(/me/i);
  expect(photo.src).toContain("moi");
});
