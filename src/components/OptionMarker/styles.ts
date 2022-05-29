import styled, { css } from 'styled-components';

interface ContainerProps {
    isSelected: boolean;
}

export const Container = styled.div<ContainerProps>`
    font-size: 14px;
    color: #2B2B2B;

    display: flex;
    align-items: center;

    margin-bottom: 11px;

    svg {
        color: #2B2B2B;

        ${props => props.isSelected && css`
            color: #30B283;
        `}
    }

    p {
        margin-left: 8px;
        display: inline-block;
    }

`