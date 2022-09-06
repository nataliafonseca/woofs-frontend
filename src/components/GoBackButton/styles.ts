import styled from "styled-components";

export const Container = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({ theme }) => theme.white};
  box-shadow: 0px 1px 3px ${(props) => props.theme.boxShadow};

  display: flex;
  justify-content: center;
  align-items: center;
`;
