import React from "react";
import { render, screen } from "@testing-library/react";
import RenderFooter from "./RenderFooter";
import App from "../../App";

describe("Footer: renders elements correctly ", () => {
  test("Credit elements are present ", () => {
    render(<RenderFooter />, { wrapper: App });

    const credits = document.querySelectorAll(".credits > ul > li");
    expect(credits).toHaveLength(3);
    screen.getByRole("link", { name: /freakflagsprite/i });
    screen.getByRole("link", { name: /icons8/i });
    screen.getByRole("link", { name: /flaticon/i });

    const contactLinks = document.querySelectorAll(".contact-links > ul > li");
    expect(contactLinks).toHaveLength(3);
  });

  test("my links elements are present", () => {
    render(
      <App isEnglish={false}>
        <RenderFooter />
      </App>
    );

    const credits = document.querySelectorAll(".credits > ul > li");
    expect(credits).toHaveLength(3);
    screen.getByRole("link", { name: /freakflagsprite/i });
    screen.getByRole("link", { name: /icons8/i });
    screen.getByRole("link", { name: /flaticon/i });
    expect(credits[0]).toHaveTextContent(/Abschnitt/i);
    expect(credits[1]).toHaveTextContent(/Seite/i);

    const contactLinks = document.querySelectorAll(".contact-links > ul > li");
    expect(contactLinks).toHaveLength(3);
    //expect(contactLinks[2]).toHaveTextContent(/edabit/i);
    expect(contactLinks[2]).toHaveTextContent(/linkedin/i);
  });
});
