import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
`;
export const ImageWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const ImageStyled = styled.img``;

export const SectionTitle = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 120%;
  color: ${({ theme }) => theme.gray800};

  margin-bottom: 14px;
  text-align: center;
  width: 100%;
  margin: 1.3rem 0;
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  margin-top: 4rem;

  button {
    width: 100%;
  }
`;

export const LinkWrapper = styled.div`
  width: 100%;
  text-align: center;

  margin-top: 1.2rem;
  text-decoration: underline;

  a {
    color: ${({ theme }) => theme.gray500};
    font-size: 0.87rem;
    font-weight: 400;
  }
`;
