import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createRobotThunk } from "../../redux/thunk/robotsThunk";

const CreateRobotForm = () => {

  const emptyRobot = {
    name: "",
    img: "",
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
    formData.img === ""||
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
      <form autoComplete="off" onSubmit={submitRobot}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="Introduce your name" value={formData.name} onChange={createRobot} />
        <label htmlFor="img">Image URL:</label>
        <input type="text" name="img" id="img" placeholder="https://introduceyourimg.com" value={formData.img} onChange={createRobot} />
        <label htmlFor="speed">Speed:</label>
        <input type="number" max="10" name="speed" id="speed" placeholder="6" value={formData.speed} onChange={createRobot} />
        <label htmlFor="resistance">Resistance:</label>
        <input type="number" max="10" name="resistance" id="resistance" placeholder="6" value={formData.resistance} onChange={createRobot} />
        <label htmlFor="date">Date:</label>
        <input type="date" name="date" id="date" value={formData.date} onChange={createRobot} />
        <button type="submit" disabled={invalidForm}>Create</button>
      </form>
    </>
  )
}

export default CreateRobotForm;
