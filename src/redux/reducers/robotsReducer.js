import actionTypes from "../actions/actionTypes/actionTypes";

const robotsReducer = (robots = [], action = {}) => {
  let newRobotsState;
  switch (action.type) {
    case actionTypes.loadRobots:
      newRobotsState = [...action.robots];
      break;
    case actionTypes.createRobot:
      newRobotsState = [...robots, ...action.robot];
      break;
    case actionTypes.updateRobot:
      newRobotsState = robots.map((robot) =>
        robot.id === action.robot.id ? { ...action.robot } : { ...robot }
      );
      break;
    case actionTypes.deleteRobot:
      newRobotsState = robots.filter((robot) => robot.id !== action.id);
      break;
    default:
      newRobotsState = [...robots];
  }
  return newRobotsState;
};

export default robotsReducer;
