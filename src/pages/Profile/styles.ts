import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  h2 {
    margin-top: 1rem;
    margin-bottom: 1.2rem;
    font-size: 1.75rem;
  }

  > div {
    width: 100%;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: absolute;
    right: 0;
    border: none;
    background-color: ${(props) => props.theme.white};
    box-shadow: 0px 1px 3px ${(props) => props.theme.boxShadow};
    color: ${(props) => props.theme.green500};
    font-weight: bold;
    line-height: 0;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    border-radius: 100px;
    transition: 0.2s;

    &:hover,
    &:active {
      background-color: ${(props) => props.theme.gray50};
    }
  }
`;

export const ProfilePicture = styled.img`
  width: 168px;
  aspect-ratio: 1;
  border-radius: 50%;
  align-self: center;
  margin-top: 2rem;
`;
