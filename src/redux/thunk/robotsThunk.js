import { createRobotAction, deleteRobotAction, loadRobotsAction, loadSingleRobotAction } from "../actions/actionsCreator/actionsCreator";

export const loadRobotsListThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const robotsList = await response.json();

  dispatch(loadRobotsAction(robotsList));
};

export const removeRobotThunk = (id) => async (dispatch) => {
  const response = await fetch((`${process.env.REACT_APP_API_URL}${id}`), {method: "DELETE",});
  const robot = await response.json();
  dispatch(deleteRobotAction(robot.robot.id));
}

export const loadRobotThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${id}`);
  const robot = await response.json();
  dispatch(loadSingleRobotAction(robot));
}

export const createRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(robot),
  });
  if (response.ok) {
    const newRobot = await response.json();
    dispatch(createRobotAction(newRobot));
  }
};

