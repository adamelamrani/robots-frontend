import { Route, Routes } from "react-router-dom";
import NavComponent from "./components/NavComponent/NavComponent";
import RobotDetailsPage from "./components/RobotDetailsPage/RobotDetailsPage";
import RobotsPageComponent from "./components/RobotsPageComponent/RobotsPageComponent";

function App() {
  return (
    <>
      <NavComponent />
      <h1>Robots</h1>
        <Routes>
          <Route path="/robots" element={<RobotsPageComponent />} />
          <Route path="/robots/:id" element ={<RobotDetailsPage />} />
        </Routes>
    </>
  );
}

export default App;
