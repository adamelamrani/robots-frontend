import { render, screen } from "@testing-library/react";
import RobotsPageComponent from "./RobotsPageComponent";

describe("Given a RobotsPageComponent", () => {
  describe("When it's rendered", () => {
    test("Then it should display a heading with 'Robots List' text in it", () => {
      const expectedText = "Robots List";

      render(<RobotsPageComponent />);

      const expectedOutput = screen.getByRole("heading", {
        name: /robots list/i,
      });
      expect(expectedOutput).toBeInTheDocument();
      expect(expectedOutput.textContent).toBe(expectedText);
    });
  });

  test("Then it should render a list", () => {
    render(<RobotsPageComponent />);

    const expectedElement = screen.getByRole("list");

    expect(expectedElement).toBeInTheDocument();
  });
});
