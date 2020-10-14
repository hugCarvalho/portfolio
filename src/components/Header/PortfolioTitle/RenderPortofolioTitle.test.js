import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RenderPortfolioTitle from "./RenderPortfolioTitle";

test("RenderPortfolioTitle is present ", () => {
  render(
    <BrowserRouter>
      <RenderPortfolioTitle />
    </BrowserRouter>
  );

  //Equivalent
  expect(screen.getByText(/hugo's/i)).toBeInTheDocument();
  screen.getByText(/Portfolio/i);
});
