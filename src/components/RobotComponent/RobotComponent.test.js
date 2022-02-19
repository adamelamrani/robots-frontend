import { render, screen } from "@testing-library/react";
import RobotComponent from "./RobotComponent";

describe("Given a RobotComponent", () => {
  describe("When it's rendered", () => {
    test("Then it should render a listitem with a heading inside", () => {
      render(<RobotComponent />);

      const element = screen.getAllByRole("listitem");
      const expectedOutput = screen.getByRole("heading");
      expect(element[0]).toContainElement(expectedOutput);
    });
  });
});
