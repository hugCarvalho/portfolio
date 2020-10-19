import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "../../../../App";
import MyInfoCardLinks from "./MyInfoCardLinks";

describe("MyInfoCardLinks", () => {
  test("button links are present and link to correspondent resources", () => {
    const Wrapper = ({ children }) => {
      return (
        <Router history={history}>
          <App>{children}</App>
        </Router>
      );
    };
    const history = createMemoryHistory();
    render(<MyInfoCardLinks />, { wrapper: Wrapper });

    // present in English
    const cardLinks = document.querySelector(".MyInfoCardLinks > ul");
    expect(cardLinks).toHaveTextContent("Edabit");
    expect(cardLinks).toHaveTextContent("CV");
    expect(cardLinks).toHaveTextContent("GitHub");

    //Same links on whole website link properly, not only the ones on this component
    const contactLink = screen.getAllByRole("link", { name: /contact/i });
    contactLink.forEach((link) => {
      fireEvent.click(link);
      expect(link.href).toContain("contact");
      expect(screen.getByRole("button", { name: /contact/i })).toHaveClass("active");
    });

    const githubLink = screen.getAllByRole("link", { name: /github/i });
    githubLink.forEach((link) =>
      expect(link.href).toBe("https://github.com/hugCarvalho")
    );

    const cvLink = screen.getAllByRole("link", { name: /cv/i });
    cvLink.forEach((link) => expect(link.href).toContain("CV_english"));
  });

  test("German: links are present and link to correspondent resources", () => {
    const Wrapper = ({ children }) => {
      return (
        <Router history={history}>
          <App isEnglish={false}>{children}</App>
        </Router>
      );
    };
    const history = createMemoryHistory();
    render(<MyInfoCardLinks />, { wrapper: Wrapper });

    // present in German
    const cardLinks = document.querySelector(".MyInfoCardLinks > ul");
    expect(cardLinks).toHaveTextContent("Edabit");
    expect(cardLinks).toHaveTextContent("CV");
    expect(cardLinks).toHaveTextContent("GitHub");

    //Same links on whole website link properly, not only the ones on this component
    const contactLink = screen.getAllByRole("link", { name: /kontakt/i });
    contactLink.forEach((link) => {
      fireEvent.click(link);
      // expect(link.href).toContain("kontakt");
      expect(screen.getByRole("button", { name: /kontakt/i })).toHaveClass("active");
    });

    const githubLink = screen.getAllByRole("link", { name: /github/i });
    githubLink.forEach((link) =>
      expect(link.href).toBe("https://github.com/hugCarvalho")
    );

    const cvLink = screen.getAllByRole("link", { name: /cv/i });
    cvLink.forEach((link) => expect(link.href).toContain("CV_deutsch"));
  });
});
