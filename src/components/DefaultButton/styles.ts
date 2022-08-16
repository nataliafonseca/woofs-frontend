import styled, { css } from 'styled-components';

interface buttonProps {
  isSelected?: boolean;
}

export const Container = styled.button<buttonProps>`
  border: none;
  border: 1px solid #30b283;
  background: #30b283;
  border-radius: 100px;

  color: #fff;
  padding: 12px 65.5px;
  font-weight: 700;
  font-size: 16px;

  ${(props) =>
    props.isSelected &&
    css`
      background: #fff;
      color: #30b283;
      border: 1px solid #c4c4c4;
    `}
`;
