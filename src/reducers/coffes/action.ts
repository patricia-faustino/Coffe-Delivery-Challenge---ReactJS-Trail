import { Coffe } from "../../contexts/CoffesContext"

export enum CoffeActionTypes {
    ADD_COFFE = 'ADD_COFFE',
    REMOVE_COFFE = 'REMOVE_COFFE',
    DECREASE_COFFE_QUANTITY = 'DECREASE_COFFE_QUANTITY',
    REMOVE_TOTAL_QUANTITY = 'REMOVE_TOTAL_QUANTITY',
    REMOVE_ALL_COFFE = 'REMOVE_ALL_COFFE',
}

export function addAmountCoffeAction(
    coffe: Coffe
) {
    return{
        type: CoffeActionTypes.ADD_COFFE,
        payload: { coffe }
    }
}


export function decreaseQuantityCoffeAction(coffe: Coffe) {
    return{
        type: CoffeActionTypes.DECREASE_COFFE_QUANTITY,
        payload: { coffe }
    }
}

export function removeCoffeAction(
    coffe: Coffe
) {
    return{
        type: CoffeActionTypes.REMOVE_COFFE,
        payload: { coffe }
    }
}

export function removeAllCoffeAction() {
    return{
        type: CoffeActionTypes.REMOVE_ALL_COFFE
    }
}
