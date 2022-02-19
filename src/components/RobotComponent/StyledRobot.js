import styled from "styled-components";

const StyledRobot = styled.li`
  background-color: green;
  display: flex;
  flex-direction: column;
  img {
    width: 200px;
    height: 400px;
  }

  h2 {
    font-size: 30px;
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    padding: 0;

    li {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      text-align: left;
    }
  }
`;

export default StyledRobot;
