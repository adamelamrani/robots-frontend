
import { useNavigate } from "react-router-dom";
import StyledRobot from "./StyledRobot";

const RobotComponent = ({ name, speed, resistance, date, id, img }) => {

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/robots/${id}`)
  }

  return (
    <>
      <StyledRobot key={id} onClick={onClick}>
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
