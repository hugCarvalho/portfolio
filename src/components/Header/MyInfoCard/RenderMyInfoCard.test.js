import React from "react";
import { render, screen } from "@testing-library/react";
import RenderSelectLanguage from "../SelectLanguage/RenderSelectLanguage";
import isLanguageEnglish, { LanguageContext } from "../../../App";

import Header from "../RenderHeader";
import App from "../../../App";
import "@testing-library/jest-dom";
import RenderPortfolioTitle from "../PortfolioTitle/RenderPortfolioTitle";
import { BrowserRouter, Route } from "react-router-dom";
import RenderMyInfoCard from "./RenderMyInfoCard";
import RenderNavButtons from "../NavButtons/RenderNavButtons";

function renderWithProvider(ui, { isLanguageEnglish = true, ...options } = {}) {
  const Wrapper = ({ children }) => {
    return (
      <>
        <App init={isLanguageEnglish}>{children}</App>;
      </>
    );
  };
  return render(ui, { wrapper: Wrapper, ...options });
}

describe("Header elements are present", () => {
  test("flags should be present", () => {
    render(
      <App>
        <RenderSelectLanguage />
      </App>
    );
    const flagEN = screen.getByRole("img", { name: /english/i });
    const flagDE = screen.getByRole("img", { name: /deutsch/i });
    expect(flagEN).toBeInTheDocument();
    expect(flagDE).toBeInTheDocument();
  });

  test("RenderPortfolioTitle is present ", () => {
    // renderWithProvider(RenderPortfolioTitle);
    render(
      <BrowserRouter>
        <RenderPortfolioTitle />
      </BrowserRouter>
    );

    //Equivalent
    expect(screen.getByText(/hugo's/i)).toBeInTheDocument();
    screen.getByText(/Portfolio/i);
  });

  test("MyInfoCard is present ", () => {
    renderWithProvider(RenderMyInfoCard);
    screen.getByTestId("My Info Card");
  });

  test("Nav buttons are present", () => {
    renderWithProvider(RenderNavButtons);
    screen.getByRole("navigation");
    screen.getByRole("button", { name: /skills/i });
    screen.getByRole("button", { name: /skills/i });
    screen.getByRole("button", { name: /about/i });
    screen.getByRole("button", { name: /contact/i });
    screen.debug();
  });
});
