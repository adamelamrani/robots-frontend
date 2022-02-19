import StyledRobot from "./StyledRobot";

const RobotComponent = (name, speed, resistance, date) => {
  return (
    <>
      <StyledRobot>
        <h2>Name: </h2>
        <img src="" alt={`Robot `} />
        <ul>
          <li>Speed: ;</li>
          <li>Resistance: ;</li>
          <li>Creation date: ;</li>
        </ul>
      </StyledRobot>
    </>
  );
};

export default RobotComponent;
