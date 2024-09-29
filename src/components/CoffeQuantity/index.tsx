import { useContext } from "react";
import { CoffeQuantityContainer } from "./styles";
import { CoffeAmount, CoffesContext } from "../../contexts/CoffesContext";

interface CoffeQuantityProps {
    coffe: CoffeAmount;
    height: string;
}

export function CoffeQuantity({coffe, height}: CoffeQuantityProps) {
    const {addAmountCoffe, decreaseQuantityCoffe}= useContext(CoffesContext);

    return (
        <CoffeQuantityContainer height={height}>
            <button type="button" onClick={(e) => decreaseQuantityCoffe(e, coffe)}>
                <span>-</span>
            </button>
            <span className='coffeQuantity'>{coffe.quantity}</span>
            <button type="button" onClick={(e) => addAmountCoffe(e, coffe)}>
                <span>+</span>
            </button>
        </CoffeQuantityContainer>
    )
}