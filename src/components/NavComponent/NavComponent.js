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
            <a href="robots">Create a robot</a>
          </li>
        </ul>
      </StyledNav>
    </>
  );
};

export default NavComponent;
