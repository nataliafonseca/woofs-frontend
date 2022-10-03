import styled from "styled-components";

export const SearchMatchContainer = styled.div`
  margin: 20px;
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerButtonMatch = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px;
  margin-bottom: 20px;
  background-color: none;

  img {
    height: 78px;
    width: 78px;
  }
`;

export const ContainerReply = styled.div`
  display: flex;
  align-self: center;
  gap: 60px;
  margin: 0px 15px 0px 15px;

  svg {
    color: ${({ theme }) => theme.gray300};
    font-size: 24px;
    &:last-child {
      color: ${({ theme }) => theme.gray300};

      transform: rotateY(180deg);
    }
  }
`;
