import React from "react";
import { render } from "@testing-library/react";
import RenderSkills from "./RenderSkills";

test("should match snapshot ", () => {
  const { container } = render(<RenderSkills />);
  expect(container).toMatchSnapshot();
});
