import StyledNav from "./StyledNav";
import { Link } from "react-router-dom";
const NavComponent = () => {
  return (
    <>
      <StyledNav className="nav-bar">
        <ul className="nav-list">
          <li>
            <Link to="/robots">Robots List</Link>
          </li>
          <li>
            <Link to="/robots/create">Create a robot</Link>
          </li>
        </ul>
      </StyledNav>
    </>
  );
};

export default NavComponent;
