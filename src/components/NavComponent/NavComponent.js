import StyledNav from "./StyledNav";

const NavComponent = () => {
  return (
    <>
      <StyledNav className="nav-bar">
        <ul className="nav-list">
          <li>
            <a href="robots">Robots List</a>
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
