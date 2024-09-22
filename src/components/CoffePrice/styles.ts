import { styled } from "styled-components";

export interface CoffeQuantityContainerProps {
    fontSize: string;
    fontSizeBefore: string;
    fontWeigth: string;
    fontWeigthBefore: string;
}

export const CoffePriceContainer = styled.span<CoffeQuantityContainerProps>`
    color: ${(props) => props.theme['base-text']};
    font-family: 'Baloo2', sans-serif;
    font-size: ${(props) => props.fontSize};
    font-weight:  ${(props) => props.fontWeigth};

    &::before {
        content: 'R$ ';
        font-size:  ${(props) => props.fontSizeBefore};
        font-weight: ${(props) => props.fontWeigthBefore};
    }
`;