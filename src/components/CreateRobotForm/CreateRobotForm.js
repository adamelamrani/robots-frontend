import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createRobotThunk } from "../../redux/thunk/robotsThunk";
import { StyledButton } from "../RobotComponent/StyledRobot";
import StyledForm from "./StyledForm";

const CreateRobotForm = () => {

  const emptyRobot = {
    name: "",
    image: "",
    speed: "",
    resistance: "",
    date: "",
  }

  const [formData, setFormData] = useState(emptyRobot);

  const createRobot = (event) =>{
    setFormData({
      ...formData, [event.target.id]: event.target.value,
    })
  };

  const invalidForm = formData.name === ""||
    formData.image === ""||
    formData.speed === ""||
    formData.resistance === ""||
    formData.date  === "";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitRobot = (event) => {
    event.preventDefault();
    dispatch(createRobotThunk(formData));
    navigate("/robots");
  }
  
  return (
    <>
      <StyledForm autoComplete="off" onSubmit={submitRobot}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="Introduce your name" value={formData.name} onChange={createRobot} />
        <label htmlFor="image">Image URL:</label>
        <input type="text" name="image" id="image" placeholder="https://introduceyourimg.com" value={formData.image} onChange={createRobot} />
        <label htmlFor="speed">Speed:</label>
        <input type="number" max="10" name="speed" id="speed" placeholder="6" value={formData.speed} onChange={createRobot} />
        <label htmlFor="resistance">Resistance:</label>
        <input type="number" max="10" name="resistance" id="resistance" placeholder="6" value={formData.resistance} onChange={createRobot} />
        <label htmlFor="date">Date:</label>
        <input type="date" name="date" id="date" value={formData.date} onChange={createRobot} />
        <StyledButton type="submit" disabled={invalidForm}>Create</StyledButton>
      </StyledForm>
    </>
  )
}

export default CreateRobotForm;
