
import { useNavigate } from "react-router-dom";
import { StyledRobot, StyledButton, StylishDiv } from "./StyledRobot";

const RobotComponent = ({ name, speed, resistance, date, id, img, actionOnClick }) => {

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/robots/${id}`)
  }

  return (
    <>
     <StylishDiv>
        <StyledRobot key={id} onClick={onClick}>
        <h2>Name: {name}</h2>
        <img src={img} alt={`Robot ${name}`} />
        <span>
          <p>Speed: {speed}</p>
          <p>Resistance: {resistance}</p>
          <p>Creation date: {date}</p>
        </span>
      </StyledRobot>
      <StyledButton className="button" onClick={actionOnClick} type="button">Delete</StyledButton>
     </StylishDiv>
    </>
  );
};

export default RobotComponent;
