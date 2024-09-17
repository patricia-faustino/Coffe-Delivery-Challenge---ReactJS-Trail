import { CoffePriceContainer } from "./styles";

interface CoffePriceProps {
    coffePrice: number;
    fontSize: string;
}

export function CoffePrice({coffePrice, fontSize}: CoffePriceProps) {
    return (
        <CoffePriceContainer fontSize={fontSize}>
            {coffePrice}
        </CoffePriceContainer>
    );
}