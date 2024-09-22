import { CoffePriceContainer, CoffeQuantityContainerProps } from "./styles";

interface CoffePriceProps extends CoffeQuantityContainerProps {
    coffePrice: number;
}

export function CoffePrice({coffePrice, fontSize, fontWeigth, fontSizeBefore, fontWeigthBefore}: CoffePriceProps) {
    return (
        <CoffePriceContainer fontSize={fontSize} fontWeigth={fontWeigth} fontSizeBefore={fontSizeBefore} fontWeigthBefore={fontWeigthBefore}>
            {coffePrice}
        </CoffePriceContainer>
    );
}