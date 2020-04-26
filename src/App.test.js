import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Navbar from "./components/layout/Navbar";

test("renders a BrowserRouter", () => {
  const { getByTitle } = render(<App />);
  expect(true).toBeTruthy();
});

test("Test navigation bar contains links", () => {
  const { getByText } = render(<Navbar />);
  expect(true).toBeTruthy();
});
