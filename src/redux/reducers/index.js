import { combineReducers } from "redux";
import robotsReducer from "./robotsReducer";
import singleRobotReducer from "./singleRobotReducer";

const rootReducer = combineReducers({
  robotsList: robotsReducer,
  singleRobot: singleRobotReducer,
});

export default rootReducer;
