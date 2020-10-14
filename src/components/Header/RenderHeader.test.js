import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./RenderHeader";
import LanguagesSpoken from "./MyInfoCard/LanguagesSpoken/LanguagesSpoken";
import App from "../../App";
import RenderMyInfoCard from "./MyInfoCard/RenderMyInfoCard";
import RenderNavButtons from "./NavButtons/RenderNavButtons";
import RenderSelectLanguage from "./SelectLanguage/RenderSelectLanguage";
import RenderPortfolioTitle from "./PortfolioTitle/RenderPortfolioTitle";
import { BrowserRouter } from "react-router-dom";

function renderWithProviders(ui, isEnglish = true, ...options) {
  const Wrapper = ({ children }) => <App value={isEnglish}>{children}</App>;
  return render(ui, { wrapper: Wrapper, ...options });
}

//English or german el tests in Components files
describe("Header components should be present", () => {
  test("RenderPortfolioTitle is present ", () => {
    //If renderWithProviders is used, test fails because multiple els are found. Leave it like this or change screen query
    render(
      <BrowserRouter>
        <RenderPortfolioTitle />
      </BrowserRouter>
    );

    //Equivalent
    expect(screen.getByText(/hugo's/i)).toBeInTheDocument();
    screen.getByText(/Portfolio/i);
  });

  test("Nav buttons are present (4 buttons)", () => {
    renderWithProviders(<RenderNavButtons />);
    screen.getByRole("navigation");
    screen.getByRole("button", { name: /skills/i });
    screen.getByRole("button", { name: /skills/i });
    screen.getByRole("button", { name: /about/i });
    screen.getByRole("button", { name: /contact/i });
  });
  test("MyInfoCard should render ", () => {
    renderWithProviders(<RenderMyInfoCard />);
    screen.getByTestId("My Info Card");
  });
  test("Language flags should be present(2 flags)", () => {
    renderWithProviders(<RenderSelectLanguage />);
    const flagEN = screen.getByRole("img", { name: /english/i });
    const flagDE = screen.getByRole("img", { name: /deutsch/i });
    expect(flagEN).toBeInTheDocument();
    expect(flagDE).toBeInTheDocument();
  });
});

test("Header should render", () => {
  renderWithProviders(<Header />);
});
