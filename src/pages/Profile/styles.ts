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
`;

export const ProfilePicture = styled.img`
  width: 168px;
  aspect-ratio: 1;
  border-radius: 50%;
  align-self: center;
  margin-top: 2rem;
`;
