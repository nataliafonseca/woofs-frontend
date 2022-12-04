import styled from "styled-components";

export const MatchCardContainer = styled.div`
  max-width: 150px;

  width: calc(50% - 1rem);
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 1rem;

  height: 200px;
  border-radius: 6px;
  background-image: url("./flor.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;

  @media (max-width: 330px) {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`;

export const PetInfosWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  right: 0;
`;

export const Features = styled.div`
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 14px;
  margin-left: 8px;

  display: flex;
  align-items: flex-end;
  gap: 3px;

  span {
    font-size: 9px;
    margin-bottom: 1px;
  }
`;

export const Controls = styled.div`
  background: rgba(0, 0, 0, 0.75);
  padding: 0.5rem;
  margin-top: 5px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Divisor = styled.div`
  background: #ffffff;
  opacity: 0.5;
  height: 20px;
  width: 1px;
`;
