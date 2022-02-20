
import actionTypes from "../actions/actionTypes/actionTypes";
import { loadRobotsListThunk} from "./robotsThunk";

describe("Given a loadRobotsThunk function", () => {
  describe("When it receives a dispatch function", () => {
    test("Then it should invoke the dispatch function with the load action and the api's robot's list", async () => {
      const robots = [
        {
          id: 1,
          name: "G-MOD",
          speed: 8,
        },
        {
          id: 2,
          name: "Alarm-O-Bot",
          speed: 2,
        },
      ]

      const dispatch = jest.fn();
      const action = {
        type: actionTypes.loadRobots,
        robots: robots
      };

      await loadRobotsListThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

