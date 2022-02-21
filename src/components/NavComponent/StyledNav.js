import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: rgb(200, 200, 200);

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    box-shadow: 0px 18px 39px 6px rgba(0,0,0,0.62);

    li {
      margin: 10px;
    }
  }
`;

export default StyledNav;
