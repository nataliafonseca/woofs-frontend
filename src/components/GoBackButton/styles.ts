import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 0;

  div {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: ${({ theme }) => theme.white};
    box-shadow: ${({ theme }) => theme.boxShadow};

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
