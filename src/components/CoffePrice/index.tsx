import { CoffePriceContainer, CoffeQuantityContainerProps } from "./styles";

interface CoffePriceProps extends CoffeQuantityContainerProps {
    coffePrice: number;
}

export function CoffePrice({coffePrice, fontSize, fontWeight, fontsizebefore, fontweigthbefore}: CoffePriceProps) {
    return (
        <CoffePriceContainer 
            fontSize={fontSize} 
            fontWeight={fontWeight} 
            fontsizebefore={fontsizebefore} 
            fontweigthbefore={fontweigthbefore}
        >
            {coffePrice}
        </CoffePriceContainer>
    );
}