import actionTypes from "../actionTypes/actionTypes";

const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

const createRobotAction = (robot) => ({
  type: actionTypes.createRobot,
  robot,
});

const updateRobotAction = (id) => ({
  type: actionTypes.updateRobot,
  id,
});

const deleteRobotAction = (id) => ({
  type: actionTypes.deleteRobot,
  id,
});
