import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../../App";
import "@testing-library/jest-dom";
import RenderMyInfoCard from "./RenderMyInfoCard";

test("MyInfoCard is present per default language", () => {
  render(
    <App>
      <RenderMyInfoCard />
    </App>
  );
  screen.getByTestId("My Info Card");
});
