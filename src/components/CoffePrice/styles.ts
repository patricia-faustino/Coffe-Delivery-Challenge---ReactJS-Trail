import { styled } from "styled-components";

export interface CoffeQuantityContainerProps {
    fontSize: string;
    fontsizebefore: string;
    fontWeight: string;
    fontweigthbefore: string;
}

export const CoffePriceContainer = styled.span<CoffeQuantityContainerProps>`
    color: ${(props) => props.theme['base-text']};
    font-family: 'Baloo2', sans-serif;
    font-size: ${(props) => props.fontSize};
    font-weight:  ${(props) => props.fontWeight};

    &::before {
        content: 'R$ ';
        font-size:  ${(props) => props.fontsizebefore};
        font-weight: ${(props) => props.fontweigthbefore};
    }
`;