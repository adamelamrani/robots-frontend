import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RobotDetailsPage from "./RobotDetailsPage";

describe("Given a RobotDetailsPage", () => {
  describe("When it's rendered", () => {
    test("Then it should display an img element'", () => {

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RobotDetailsPage /> 
          </Provider>
        </BrowserRouter>
      )

      const expectedOutput = screen.getByRole("img");

      expect(expectedOutput).toBeInTheDocument();

    });
  });
});
