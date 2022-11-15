import styled, { css } from "styled-components";

export const CarouselContainer = styled.div``;

export const CardContainer = styled.div`
  width: 295px;
  height: 466px;
  margin: 55px auto 2rem auto;

  .swipe {
    position: absolute;
  }
`;

export const Card = styled.div<{
  img: string;
  isShowing: boolean;
  nextToShow: boolean;
}>`
  position: relative;
  width: 295px;
  height: 466px;
  border-radius: 15px;
  overflow: hidden;
  color: ${(props) => props.theme.white};
  transition: all 0.3s ease;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  ${(props) =>
    !props.nextToShow &&
    !props.isShowing &&
    css`
      display: none;
    `}

  ${(props) =>
    !props.isShowing &&
    css`
      top: -15px;
      left: 20px;
      width: 250px;
      height: 420px;

      img {
        opacity: 0.3;
      }
    `}
`;

export const Distance = styled.div<{ isShowing: boolean }>`
  position: absolute;
  top: 20px;
  left: 16px;

  font-weight: 700;
  font-size: 12px;
  color: ${(props) => props.theme.white};
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 7px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  ${(props) =>
    !props.isShowing &&
    css`
      display: none;
    `}
`;

export const Details = styled.div<{ isShowing: boolean }>`
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;

  background: rgba(43, 43, 43, 0.8);
  padding: 1rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h6 {
    font-size: 28px;
    display: inline;
  }

  b {
    display: inline;
  }

  ${(props) =>
    !props.isShowing &&
    css`
      display: none;
    `}
`;

export const Race = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-top: 4px;
`;

export const Stamp = styled.div`
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 100%;

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
