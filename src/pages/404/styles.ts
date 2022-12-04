import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
  color: ${(props) => props.theme.green500};
  text-align: center;

  h1 {
    font-size: 50px;
    margin-bottom: 65px;
  }

  b {
    font-size: 20px;
    margin-top: 75px;
  }

  span {
    font-size: 1rem;
    color: ${(props) => props.theme.gray500};
    margin-top: 1rem;
  }

  button {
    width: 90%;
    margin-top: 75px;
  }
`;
