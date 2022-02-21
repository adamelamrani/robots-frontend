import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import CreateRobotForm from "./components/CreateRobotForm/CreateRobotForm";
import NavComponent from "./components/NavComponent/NavComponent";
import RobotDetailsPage from "./components/RobotDetailsPage/RobotDetailsPage";
import RobotsPageComponent from "./components/RobotsPageComponent/RobotsPageComponent";

function App() {
  const StyledHeading = styled.h1`
  text-align: center;
  font-size: 30px;
  color: gold;
  `;

  const StyledAppDiv = styled.div`
  display: flex;
  justify-content: center;
  `
  return (
    <>
      <NavComponent />
      <StyledHeading>Robots</StyledHeading>
      <StyledAppDiv className="row col-12">
      <Routes>
          <Route path="/robots" element={<RobotsPageComponent />} />
          <Route path="/robots/:id" element ={<RobotDetailsPage />} />
          <Route path="/robots/create" element={<CreateRobotForm />} />
        </Routes>
      </StyledAppDiv>
        
    </>
  );
}

export default App;
