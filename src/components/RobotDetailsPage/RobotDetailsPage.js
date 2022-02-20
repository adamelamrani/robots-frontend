import RobotComponent from "../RobotComponent/RobotComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RobotsPageStyled, RobotsPageHeadingStyled } from "../RobotsPageComponent/RobotsPageStyled";
import { loadRobotThunk, removeRobotThunk } from "../../redux/thunk/robotsThunk";
import { useParams } from "react-router-dom";

const RobotDetailsPage = () => {

  const {id} = useParams()
  const robot = useSelector((state) => state.singleRobot);
  const dispatchId = useDispatch();

  const deleteDispatch = useDispatch();

  useEffect(() => {
    dispatchId(loadRobotThunk(id));
    deleteDispatch(removeRobotThunk)
  }, [deleteDispatch, dispatchId, id]);

  return (
    <>
      <RobotsPageHeadingStyled>{robot.name}</RobotsPageHeadingStyled>
      <RobotsPageStyled title="robots-list">
        <RobotComponent
          img={robot.image}
          key={robot._id}
          name={robot.name}
          speed={robot.speed}
          resistance={robot.resistance}
          date={robot.date}
        />
      </RobotsPageStyled>
    </>
  );
};

export default RobotDetailsPage;
