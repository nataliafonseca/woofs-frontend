import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  overflow: auto;

  @media (min-height: 800px) {
    justify-content: center;
  }
`;

export const Logo = styled.img`
  margin-top: 2.25rem;

  @media (max-width: 450px) {
    height: 5rem;
  }
`;

export const Login = styled.span`
  margin-top: 16px;
  margin-bottom: 35px;

  font-size: 14px;
  text-align: center;
`;

export const Description = styled.p`
  max-width: 18.75rem;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.gray500};
  font-size: 1rem;
`;

export const Strong = styled.strong``;
