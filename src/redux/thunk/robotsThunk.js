import { loadRobotsAction, loadSingleRobotAction } from "../actions/actionsCreator/actionsCreator";

export const loadRobotsListThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const robotsList = await response.json();

  dispatch(loadRobotsAction(robotsList));
};

export const loadRobotThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${id}`);
  const robot = await response.json();
  console.log("thunk", robot)
  dispatch(loadSingleRobotAction(robot));
}
