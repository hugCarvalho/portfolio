import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import RenderNavButtons from "./RenderNavButtons";
import App from "../../../App";

describe("Navigation Buttons tests", () => {
  test("Buttons render correctly in german as well", () => {
    const Wrapper = ({ children }) => <App isEnglish={false}>{children}</App>;
    render(<RenderNavButtons />, { wrapper: Wrapper });

    screen.getByRole("button", { name: /projekte/i });
    screen.getByRole("button", { name: /fähigkeiten/i });
    screen.getByRole("button", { name: /über mich/i });
    screen.getByRole("button", { name: /kontakt/i });
  });

  test("active class is applied correctly", () => {
    const Wrapper = ({ children }) => <App>{children}</App>;
    render(<RenderNavButtons />, { wrapper: Wrapper });

    const projects = screen.getByRole("button", { name: /projects/i });
    const skills = screen.getByRole("button", { name: /skills/i });
    const about = screen.getByRole("button", { name: /about/i });
    const contact = screen.getByRole("button", { name: /contact/i });

    expect(projects).toHaveClass("active");
    expect(skills).not.toHaveClass("active");
    expect(about).not.toHaveClass("active");
    expect(contact).not.toHaveClass("active");

    fireEvent.click(skills);
    expect(projects).not.toHaveClass("active");
    expect(skills).toHaveClass("active");
    expect(about).not.toHaveClass("active");
    expect(contact).not.toHaveClass("active");

    fireEvent.click(about);
    expect(projects).not.toHaveClass("active");
    expect(skills).not.toHaveClass("active");
    expect(about).toHaveClass("active");
    expect(contact).not.toHaveClass("active");

    fireEvent.click(contact);
    expect(projects).not.toHaveClass("active");
    expect(skills).not.toHaveClass("active");
    expect(about).not.toHaveClass("active");
    expect(contact).toHaveClass("active");
  });

  test("button links link correctly to the correspondent pages ", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    const projects = screen.getByRole("button", { name: /projects/i });
    const skills = screen.getByRole("button", { name: /skills/i });
    const about = screen.getByRole("button", { name: /about/i });
    const contact = screen.getByRole("button", { name: /contact/i });

    userEvent.click(skills);
    expect(screen.getByText(/semantic html/i)).toBeInTheDocument();

    userEvent.click(about);
    expect(screen.getByText(/basic introduction/i)).toBeInTheDocument();

    userEvent.click(contact);
    expect(screen.getByText(/176 782 93 187/i)).toBeInTheDocument();

    userEvent.click(projects);
    expect(screen.getByText(/displays weather data from /i)).toBeInTheDocument();
  });
});
