import styled, { css } from "styled-components";

export const FileInputContainer = styled.div<{
  hasImage: boolean;
  heigth?: string;
  width?: string;
}>`
  border-radius: 12px;
  cursor: pointer;
  height: ${(props) => (props.heigth ? props.heigth : "96px")};
  width: ${(props) => (props.width ? props.width : "125px")};
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    !props.hasImage &&
    css`
      border: 3px dashed ${(props) => props.theme.gray300};
      background: ${(props) => props.theme.gray50};
    `}
`;

export const EmptyInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    display: block;
    font-size: 10px;
    color: ${(props) => props.theme.gray300};
  }
`;

export const SelectedImageWrapper = styled.div`
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

export const TrashButton = styled.button`
  border: 0;
  background: transparent;
`;

export const ImageSelected = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
