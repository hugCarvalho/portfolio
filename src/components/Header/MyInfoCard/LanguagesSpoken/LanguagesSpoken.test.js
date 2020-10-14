import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../../../App";
import "@testing-library/jest-dom";
import LanguagesSpoken from "./LanguagesSpoken";

test("should render in english ", () => {
  const Wrapper = ({ children }) => <App>{children}</App>;
  render(<LanguagesSpoken />, { wrapper: Wrapper });

  screen.getByText(/speaks:/i);
  screen.getByRole("figure", { name: /english/i });
  screen.getByRole("figure", { name: /german/i });
  screen.getByRole("figure", { name: /portuguese/i });
  screen.getByRole("figure", { name: /spanish/i });
});

test("should render in german ", () => {
  const Wrapper = ({ children }) => <App isEnglish={false}>{children}</App>;
  render(<LanguagesSpoken />, { wrapper: Wrapper });

  screen.getByText(/spricht:/i);
  screen.getByRole("figure", { name: /englisch/i });
  screen.getByRole("figure", { name: /deutsch/i });
  screen.getByRole("figure", { name: /portugiesisch/i });
  screen.getByRole("figure", { name: /spanisch/i });
});
