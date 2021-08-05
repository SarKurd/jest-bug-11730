import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("should generate snapshots", () => {
  const { container } = render(<App />);

  expect(container).toMatchSnapshot();
  // uncomment this
  // expect(container).toMatchInlineSnapshot();
});
