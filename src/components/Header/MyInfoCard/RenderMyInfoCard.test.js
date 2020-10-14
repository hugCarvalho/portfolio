import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../../App";
import "@testing-library/jest-dom";
import RenderMyInfoCard from "./RenderMyInfoCard";

describe.skip("Header elements are present", () => {
  test("MyInfoCard is present in english and german", () => {
    render(RenderMyInfoCard);
    screen.getByTestId("My Info Card");
    screen.getAllByRole("link", { name: /contact/i });
  });
});
