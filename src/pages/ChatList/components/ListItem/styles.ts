import styled from "styled-components";

export const Wrapper = styled.div<{ empty: boolean }>`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  padding-inline: 20px;

  cursor: pointer;
  user-select: none;

  img {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.5rem;

    padding-block: 1rem;

    .message {
      h2 {
        font-size: 1rem;
        margin-bottom: 0.2rem;
      }

      max-width: ${(props) =>
        props.empty ? "calc(100vw - 150px)" : "calc(100vw - 150px - 1.5rem)"};

      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .info {
      display: grid;
      place-content: start;

      span {
        font-size: 0.875rem;
        margin-bottom: 0.2rem;
      }

      .counter {
        display: grid;
        place-content: center;
        margin-left: auto;

        height: 22px;
        min-width: 22px;

        border-radius: 1000px;
        background-color: ${(props) => props.theme.green500};
        color: ${(props) => props.theme.white};
        font-weight: bold;
        font-size: 0.875rem;
        padding: 0.2rem;
      }
    }

    span {
      color: ${(props) => props.theme.gray500};
    }
  }

  & + & {
    > div {
      border-top: 1px solid ${(props) => props.theme.gray100};
    }
  }

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.gray100};
  }
`;
