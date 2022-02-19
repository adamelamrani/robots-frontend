import RobotComponent from "../RobotComponent/RobotComponent";
import { RobotsPageStyled, RobotsPageHeadingStyled } from "./RobotsPageStyled";

const RobotsPageComponent = () => {
  return (
    <>
      <RobotsPageHeadingStyled>Robots List</RobotsPageHeadingStyled>
      <RobotsPageStyled title="robots-list">
        <RobotComponent />
      </RobotsPageStyled>
    </>
  );
};

export default RobotsPageComponent;
