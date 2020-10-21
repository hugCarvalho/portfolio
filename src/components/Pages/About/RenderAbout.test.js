import React from "react";
import { render, screen } from "@testing-library/react";
import RenderAbout from "./RenderAbout";
import { LanguageContext } from "../../../App";
import { MemoryRouter } from "react-router-dom";

const customRender = (ui, value = true) => {
  return render(
    <MemoryRouter>
      <LanguageContext.Provider value={{ isLanguageEnglish: value }}>
        {ui}
      </LanguageContext.Provider>
    </MemoryRouter>
  );
};

test("Question links correctly link to the excerpt in the document ", () => {
  customRender(<RenderAbout />);
  expect(
    screen.getByRole("link", { name: /where does my knowledge come from\?/i }).href
  ).toContain("#knowledge");
  expect(
    screen.getByRole("link", { name: /how do i improve my problem solving skills\?/i })
      .href
  ).toContain("#challenges");
  expect(screen.getByRole("link", { name: /what did i study\?/i }).href).toContain(
    "#study"
  );
  expect(
    screen.getByRole("link", { name: /what are my main hobbies\?/i }).href
  ).toContain("#hobbies");
});

test("should match snapshot in english ", () => {
  const { container } = customRender(<RenderAbout />);
  expect(container).toMatchSnapshot();
});

test("should match snapshot in german ", () => {
  const { container } = customRender(<RenderAbout />, false);
  expect(container).toMatchSnapshot();
  screen.debug();
});
