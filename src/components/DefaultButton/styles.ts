import styled, { css } from 'styled-components';

interface buttonProps {
  isSelected?: boolean;
}

export const Container = styled.button<buttonProps>`
  border: none;
  border: 1px solid ${({ theme }) => theme.green500};
  background: ${({ theme }) => theme.green500};
  border-radius: 100px;

  color: ${({ theme }) => theme.white};
  padding: 12px 65.5px;
  font-weight: 700;
  font-size: 16px;

  ${(props) =>
    props.isSelected &&
    css`
      background: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.green500};
      border: 1px solid ${({ theme }) => theme.gray300};
    `}
`;
