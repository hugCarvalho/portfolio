import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RenderSelectLanguage from "./RenderSelectLanguage";
import { LanguageContext } from "../../../App";
import userEvent from "@testing-library/user-event";

test("should ", () => {
  const handleClick = jest.fn();
  render(
    <LanguageContext.Provider
      value={{
        isLanguageEnglish: handleClick,
        setIsLanguageEnglish: () => handleClick(false),
      }}
    >
      <RenderSelectLanguage onClick={handleClick} />
    </LanguageContext.Provider>
  );

  const btnFlagEN = screen.getByRole("button", { name: /english/i });
  const btnFlagDE = screen.getByRole("button", { name: /deutsch/i });

  userEvent.click(btnFlagDE);
  userEvent.click(btnFlagEN);
  userEvent.click(btnFlagDE);
  userEvent.click(btnFlagEN);
  expect(handleClick).toHaveBeenCalledTimes(4);
});
