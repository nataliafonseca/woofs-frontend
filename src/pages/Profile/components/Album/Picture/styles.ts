import styled from "styled-components";

export const Container = styled.div<{
  height?: string;
  width?: string;
}>`
  border-radius: 12px;
  cursor: pointer;
  height: ${(props) => (props.height ? props.height : "96px")};
  width: ${(props) => (props.width ? props.width : "125px")};
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    position: absolute;
    top: 5px;
    right: 5px;
    filter: ${(props) => `drop-shadow(0px 1px 3px ${props.theme.green500})`};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
