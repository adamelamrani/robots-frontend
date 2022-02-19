import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store/store";

describe("Given an app component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading with 'Robot's text", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const screenText = screen.getByRole("heading", { name: "Robots" });
      expect(screenText).toBeInTheDocument();
    });
  });
});
