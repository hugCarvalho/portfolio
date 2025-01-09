import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../../../../App";
import LanguagesSpoken from "./LanguagesSpoken";

test("should render in english ", () => {
  const Wrapper = ({ children }) => <App>{children}</App>;
  render(<LanguagesSpoken />, { wrapper: Wrapper });

  screen.getByText(/speaks:/i);
  expect(screen.getByRole("figure", { name: /german/i })).toHaveClass("fflag-DE");
  expect(screen.getByRole("figure", { name: /portuguese/i })).toHaveClass("fflag-PT");
  expect(screen.getByRole("figure", { name: /spanish/i })).toHaveClass("fflag-ES");
  expect(screen.getByRole("figure", { name: /english/i })).toHaveClass("fflag-GB");
});

test("should render in german ", () => {
  const Wrapper = ({ children }) => <App isEnglish={false}>{children}</App>;
  render(<LanguagesSpoken />, { wrapper: Wrapper });

  screen.getByText(/spricht:/i);
  expect(screen.getByRole("figure", { name: /englisch/i })).toHaveClass("fflag-GB");
  expect(screen.getByRole("figure", { name: /deutsch/i })).toHaveClass("fflag-DE");
  expect(screen.getByRole("figure", { name: /portugiesisch/i })).toHaveClass("fflag-PT");
  expect(screen.getByRole("figure", { name: /spanisch/i })).toHaveClass("fflag-ES");
});
