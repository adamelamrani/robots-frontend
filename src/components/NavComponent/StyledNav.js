import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: rgb(200, 200, 200);

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    li {
      margin: 10px;
    }
  }
`;

export default StyledNav;
