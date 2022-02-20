import RobotComponent from "../RobotComponent/RobotComponent";
import { RobotsPageStyled, RobotsPageHeadingStyled } from "./RobotsPageStyled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadRobotsListThunk, removeRobotThunk } from "../../redux/thunk/robotsThunk";

const RobotsPageComponent = () => {

  const robotsList = useSelector((state) => state.robotsList);
  const dispatch = useDispatch();
  const deleteDispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsListThunk);
  }, [dispatch]);

  const deleteRobot = (id) => {
    deleteDispatch(removeRobotThunk(id))
  }
  return (
    <>
      <RobotsPageHeadingStyled>Robots List</RobotsPageHeadingStyled>
      <RobotsPageStyled title="robots-list">
        {robotsList.map((robot) => {
          return (
            <RobotComponent
              actionOnClick={() => deleteRobot(robot._id)}
              id={robot._id}
              img={robot.image}
              key={robot._id}
              name={robot.name}
              speed={robot.speed}
              resistance={robot.resistance}
              date={robot.date}
            />
          );
        })}
      </RobotsPageStyled>
    </>
  );
};

export default RobotsPageComponent;
