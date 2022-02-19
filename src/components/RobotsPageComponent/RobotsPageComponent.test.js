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

    const expectedElement = screen.getAllByRole("list", {
      name: "robots-list",
    });

    expect(expectedElement[0]).toBeInTheDocument();
  });

  describe("When ul is rendereded", () => {
    test("Then it should render another list inside of it", () => {
      render(<RobotsPageComponent />);

      const expectedParentElement = screen.getAllByRole("list");
      const expectedDescendant = screen.getAllByRole("list");

      expect(expectedParentElement[0]).toContainElement(expectedDescendant[0]);
    });
  });
});
