import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  line-height: 0;
  padding: 1rem 0.5rem;
  gap: 1rem;
  cursor: pointer;
  user-select: none;

  > div {
    background-color: ${(props) => props.theme.gray50};
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;

    display: grid;
    place-content: center;
  }

  svg {
    color: ${(props) => props.theme.green500};
  }

  & + & {
    border-top: 1px solid ${(props) => props.theme.gray100};
  }

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.gray100};
  }
`;