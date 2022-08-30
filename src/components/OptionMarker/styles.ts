import styled, { css } from "styled-components";

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.div<ContainerProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.gray800};

  display: flex;
  align-items: center;

  margin-bottom: 11px;

  svg {
    color: ${({ theme }) => theme.gray800};

    ${(props) =>
      props.isSelected &&
      css`
        color: ${({ theme }) => theme.green500};
      `}
  }

  p {
    margin-left: 8px;
    display: inline-block;
  }
`;
