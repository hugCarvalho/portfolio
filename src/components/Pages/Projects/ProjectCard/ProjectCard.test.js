import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { LanguageContext } from "../../../../App";
import userEvent from "@testing-library/user-event";
import RenderProjects from "../RenderProjects";

function customRender(ui, value = true) {
  const Wrapper = ({ children }) => {
    return (
      <LanguageContext.Provider value={{ isLanguageEnglish: value }}>
        {children}
      </LanguageContext.Provider>
    );
  };
  return render(ui, { wrapper: Wrapper });
}

describe("Projects Card", () => {
  test("should render in german as well ", () => {
    customRender(<RenderProjects />, false);
    screen.getAllByText(/Eigenschaften/i);
  });

  test("techInfo buttons should work  ", () => {
    customRender(<RenderProjects />);
    const mockFunction = jest.fn();

    const buttons = screen.getAllByRole("button", { name: /tech/i });
    buttons.forEach(button => {
      button.addEventListener("click", mockFunction);
      userEvent.click(button);
      expect(mockFunction).toHaveBeenCalled();
    });
  });

  test("card mouse onleave should work ", () => {
    customRender(<RenderProjects />);
    const onLeaveMockFn = jest.fn();
    const cards = screen.getAllByLabelText(/project card/i);
    cards.forEach(button => {
      button.addEventListener("mouseleave", onLeaveMockFn);
      fireEvent.mouseLeave(button);
      expect(onLeaveMockFn).toHaveBeenCalled();
    });
  });
});
