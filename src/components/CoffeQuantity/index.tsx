import { useContext } from "react";
import { CoffeQuantityContainer } from "./styles";
import { CoffeAmount, CoffesContext } from "../../contexts/CoffesContext";

interface CoffeQuantityProps {
    coffe: CoffeAmount;
}

export function CoffeQuantity({coffe}: CoffeQuantityProps) {

    const {addAmountCoffe, decreaseQuantityCoffe}= useContext(CoffesContext);

    return (
        <CoffeQuantityContainer>
            <button onClick={(event) => decreaseQuantityCoffe(event, coffe)}>
                <span>-</span>
            </button>
            <span className='coffeQuantity'>{coffe.quantity}</span>
            <button onClick={(event) => addAmountCoffe(event,coffe)}>
                <span>+</span>
            </button>
        </CoffeQuantityContainer>
    )
}