import actionTypes from "../actions/actionTypes/actionTypes";


const singleRobotReducer = (robot = [], action = {}) => {
  let newRobotsState;
  switch(action.type) {
    case actionTypes.loadRobot:
      newRobotsState = {...action.robot}
      break;
    default: 
    newRobotsState = [...robot];
  }
  return newRobotsState;
}

export default singleRobotReducer;
