import styled, { css } from 'styled-components';

interface buttonProps {
    isSelected?: boolean;
}

export const Container = styled.button<buttonProps>`
    border: none;
    border: 1px solid #30B283;
    background: #30B283;
    border-radius: 100px;
    
    color: #FFF;
    padding: 12px 65.5px;
    font-weight: 700;
    font-size: 16px;

    ${props => props.isSelected && css`
        background: #FFF;
        color: #30B283;
        border: 1px solid #C4C4C4;
    `}
`;