import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyPic from "./MyPic";

test("should ", () => {
  render(<MyPic />, { wrapper: BrowserRouter });
  screen.getByRole("img", { name: /about me/i });
  screen.getByAltText(/me/i);
  const photo = screen.getByRole("img", { name: /about me/i });
  expect(photo.src).toContain("moi");
});
