import styled from "styled-components";

export const Wrapper = styled.div<{ titleBellow: boolean }>`
  width: 100%;
  display: grid;
  place-content: center;
  margin-top: ${(props) => (props.titleBellow ? "4rem" : "2rem")};
  gap: 2rem;
  text-align: center;
  padding: 5rem 2rem;

  h2 {
    color: ${(props) => props.theme.green500};
  }

  p {
    color: ${(props) => props.theme.gray500};
  }

  img {
    max-width: 100%;
    margin-top: 2rem;
    margin-bottom: 3rem;
    margin-inline: auto;
  }
`;
