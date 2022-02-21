import styled from "styled-components";

const RobotsPageStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  color: gold;
  max-width: 1200px; 

  img {
    object-fit: cover ;
  }

  li{
    display: flex;
    flex-direction: column;
  }
`;

const RobotsPageHeadingStyled = styled.h2`
  display: flex;
  justify-content: center;
  color: white;
`;

export { RobotsPageStyled, RobotsPageHeadingStyled };
