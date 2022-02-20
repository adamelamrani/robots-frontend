import { Route, Routes } from "react-router-dom";
import NavComponent from "./components/NavComponent/NavComponent";
import RobotsPageComponent from "./components/RobotsPageComponent/RobotsPageComponent";

function App() {
  return (
    <>
     <NavComponent />
      <h1>Robots</h1>
      <RobotsPageComponent />
        <Routes>
          <Route path="/*" element={<RobotsPageComponent />}></Route>
        </Routes>
    </>
  );
}

export default App;
