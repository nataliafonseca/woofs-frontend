import styled, { css } from 'styled-components';

export const InputWrapper = styled.div<{isFocused: boolean}>`
    width: 100%;
    border: 1px solid var(--gray30);
    border-radius: 23px;
    padding: 0.9rem 2rem;
    position: relative;
    transition: all 0.2s ease-in-out;

    display: flex;
    align-items: center;

    svg {
        font-size: 1.2rem;
        color: var(--gray50);
    }

    ${({ isFocused }) => isFocused && css`
        border: 1px solid var(--green100);
    `}
`

export const InputStyled = styled.input`
    height: 100%;
    width: 100%;
    border: none;
`

export const Label = styled.span<{isEmpty: boolean}>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: var(--gray50);
    padding: 0 4px;
    background: var(--white);
    font-size: 14px;
    transition: all 0.2s ease-in-out;

    ${({ isEmpty }) => isEmpty && css`
        transform: translateY(-200%);
        font-size: 12px;
    `}
`