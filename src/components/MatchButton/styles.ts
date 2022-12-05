import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background: none;
  border-radius: 100%;
  height: 78px;
  width: 78px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 47px;
    max-height: 40px;
  }

  &:disabled {
    filter: grayscale(1);
    cursor: initial;
  }
`;
