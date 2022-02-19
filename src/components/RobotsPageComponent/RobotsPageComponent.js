import RobotComponent from "../RobotComponent/RobotComponent";
import { RobotsPageStyled, RobotsPageHeadingStyled } from "./RobotsPageStyled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadRobotsListThunk } from "../../redux/thunk/robotsThunk";

const RobotsPageComponent = () => {
  const robotsList = useSelector((state) => state.robotsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotsListThunk);
  }, [dispatch]);

  return (
    <>
      <RobotsPageHeadingStyled>Robots List</RobotsPageHeadingStyled>
      <RobotsPageStyled title="robots-list">
        {robotsList.map((robot) => {
          return (
            <RobotComponent
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
