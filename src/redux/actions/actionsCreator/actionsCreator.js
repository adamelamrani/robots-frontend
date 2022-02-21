import actionTypes from "../actionTypes/actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const loadSingleRobotAction = (robot) => ({
  type: actionTypes.loadRobot,
  robot
})

export const createRobotAction = (robot) => ({
  type: actionTypes.createRobot,
  robot,
});

export const updateRobotAction = (id) => ({
  type: actionTypes.updateRobot,
  id,
});

export const deleteRobotAction = (id) => ({
  type: actionTypes.deleteRobot,
  id,
});

