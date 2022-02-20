import RobotComponent from "../RobotComponent/RobotComponent";
import { RobotsPageStyled, RobotsPageHeadingStyled } from "../RobotsPageComponent/RobotsPageStyled";

const RobotDetailsPage = ({name, id, image, speed, resistance, date}) => {
  return (
    <>
      <RobotsPageHeadingStyled>{name}</RobotsPageHeadingStyled>
      <RobotsPageStyled title="robots-list">
            <RobotComponent
              img={image}
              key={id}
              name={name}
              speed={speed}
              resistance={resistance}
              date={date}
            />
          );
      </RobotsPageStyled>
    </>
  );
};

export default RobotDetailsPage;
