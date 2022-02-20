import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadRobotThunk } from "../../redux/thunk/robotsThunk";
import StyledRobot from "./StyledRobot";

const RobotComponent = ({ name, speed, resistance, date, id, img }) => {

  const navigate = useNavigate();

  const onClick = () => {
    console.log(id);
    navigate(`/robots/${id}`)
  }
  
  const dispatchId = useDispatch();
  useEffect(() => {
    dispatchId(loadRobotThunk);
  }, [dispatchId]);



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
