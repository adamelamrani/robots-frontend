import StyledRobot from "./StyledRobot";

const RobotComponent = ({ name, speed, resistance, date, id, img }) => {
  return (
    <>
      <StyledRobot key={id}>
        <h2>Name: {name}</h2>
        <img src={img} alt={`Robot ${name}`} />
        <span>
          <p>Speed: {speed}</p>
          <p>Resistance: {resistance}</p>
          <p>Creation date: {date}</p>
        </span>
      </StyledRobot>
    </>
  );
};

export default RobotComponent;
