import actionTypes from "../actions/actionTypes/actionTypes";

const robotsReducer = (robots = [], action = {}) => {
  let newRobotsState;
  switch (action.types) {
    case actionTypes.loadRobots:
      newRobotsState = [...action.robots];
      break;
    case actionTypes.createRobot:
      newRobotsState = [...robots, ...action.robots];
      break;
    case actionTypes.updateRobot:
      newRobotsState = robots.filter((robot) => action.id === robot.id);
      break;
    case actionTypes.deleteRobot:
      newRobotsState = robots.filter((robot) => action.id !== robot.id);
      break;
    default:
      newRobotsState = [...robots];
  }
  return newRobotsState;
};

export default robotsReducer;
