import styled from "styled-components";

export const STATUS_COLOR = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    baseText: 'base-text',
    purple: 'purple',
    white: 'white'

} as const;

export interface StatusProps {
    backgroundColor: keyof typeof STATUS_COLOR;
};

export const IconContainer = styled.div<StatusProps>`
    height: 2rem;
    width: 2rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme[STATUS_COLOR[props.backgroundColor]]};
`;