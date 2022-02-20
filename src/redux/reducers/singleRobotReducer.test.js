import singleRobotReducer from "./singleRobotReducer";

describe("Given a singleRobotReducer", () => {
  describe("When it receives an action with a robot", () => {
    test("Then it should return the new state with that robot", () => {
      const newRobot = {
        name: "Robo-reducer",
        speed: 20303,
        resistance: 0,
      }

      const action = { type: "load-robot", robot: newRobot}

      const  robot = [];

      const expectedOutput = singleRobotReducer(robot, action);

      expect(expectedOutput).toEqual(newRobot);
    });
  });
});
