import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an app component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading with 'Robot's text", () => {
      render(<App />);
      const screenText = screen.getByRole("heading", { name: "Robots" });
      expect(screenText).toBeInTheDocument();
    });
  });
});
