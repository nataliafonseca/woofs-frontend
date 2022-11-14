import styled from "styled-components";

export const CardContainer = styled.div`
  width: 90vw;
  max-width: 260px;
  height: 300px;
  margin: 2rem auto;

  .swipe {
    position: absolute;
  }
`;

export const Card = styled.div`
  position: relative;
  background-color: #fff;
  width: 80vw;
  max-width: 260px;
  height: 300px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;
