import { render, screen } from "@testing-library/react";
import NavComponent from "./NavComponent";
describe("Given a NavComponent", () => {
  describe("When it's rendered", () => {
    test("Then it should display list", () => {
      render(<NavComponent />);

      const expectedElement = screen.getByRole("list");

      expect(expectedElement).toBeInTheDocument();
    });
  });

  test("Then it should display two anchors with text 'Robots List' and 'Create a Robot'", () => {
    render(<NavComponent />);
    const firstTextElement = "Robots List";
    const secondTextElement = "Create a robot";

    const firstExpectedElement = screen.getByRole("link", {
      name: /robots list/i,
    });
    const secondExpectedElement = screen.getByRole("link", {
      name: /create a robot/i,
    });

    expect(firstExpectedElement.textContent).toEqual(firstTextElement);
    expect(secondExpectedElement.textContent).toEqual(secondTextElement);
  });
});
