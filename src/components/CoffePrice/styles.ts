import { styled } from "styled-components";

interface CoffeQuantityContainerProps {
    fontSize: string;
    fontSizeBefore: string;
}

export const CoffePriceContainer = styled.span<CoffeQuantityContainerProps>`
    color: ${(props) => props.theme['base-text']};
    font-family: 'Baloo2', sans-serif;
    font-size: ${(props) => props.fontSize};
    font-weight: bold;

    &::before {
        content: 'R$ ';
        font-size: 14px;
        font-weight: normal;
    }
`;