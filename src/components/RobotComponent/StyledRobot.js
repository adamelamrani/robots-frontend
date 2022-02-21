import styled from "styled-components";

export const StyledRobot = styled.li`
  background-color: #778da9;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
  img {
    width: 300px;
    height: 400px;
    border: 3px solid #778da9;
    box-shadow: 1px -1px 85px rgba(33, 32, 33, 0.9) inset; 

  }

  h2 {
    font-size: 30px;
    text-align: center;
    margin: 20px;
    font-weight: 800;
  }
  span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    padding: 0;

    p {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      text-align: left;
      font-weight: 800;
    }
  }
`;

export const StylishDiv = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

export const StyledButton = styled.button`
  background-color: rgb(55, 55, 55);
  color: gold;
  font-weight: 800;
  width: 100px;
  margin: 10px;
  border-radius: 10px;

`
