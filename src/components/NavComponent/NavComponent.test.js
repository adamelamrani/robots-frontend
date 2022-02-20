import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavComponent from "./NavComponent";
describe("Given a NavComponent", () => {
  describe("When it's rendered", () => {
    test("Then it should display list", () => {
      render(
        <BrowserRouter>
          <NavComponent />
        </BrowserRouter>
      );

      const expectedElement = screen.getByRole("list");

      expect(expectedElement).toBeInTheDocument();
    });
  });

  test("Then it should display two anchors with text 'Robots List' and 'Create a Robot'", () => {
    render(
      <BrowserRouter>
        <NavComponent />
      </BrowserRouter>
    );
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
