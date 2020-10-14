import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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
});
