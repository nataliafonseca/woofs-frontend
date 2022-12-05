import styled from "styled-components";

export const Container = styled.form`
  margin: 20px;
`;

export const SectionTitle = styled.h2`
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  color: ${({ theme }) => theme.gray800};

  margin-bottom: 14px;
  text-align: left;
  width: 100%;
`;

export const InputsWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  margin: 1.3rem 0;

  div + div,
  p + div {
    margin-top: 1.3rem;
  }

  div + p {
    margin-top: 0.2rem;
  }
`;

export const TermsWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 100%;
  }
`;
