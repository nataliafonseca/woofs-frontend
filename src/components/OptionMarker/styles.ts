import styled, { css } from 'styled-components';

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.div<ContainerProps>`
  font-size: 14px;
  color: #2b2b2b;

  display: flex;
  align-items: center;

  margin-bottom: 11px;

  svg {
    color: #2b2b2b;

    ${(props) =>
      props.isSelected &&
      css`
        color: #30b283;
      `}
  }

  p {
    margin-left: 8px;
    display: inline-block;
  }
`;
