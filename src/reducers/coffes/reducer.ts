import { produce } from "immer";
import { CoffeAmount, Coffe, coffesAmountInitial } from "../../contexts/CoffesContext";
import { CoffeActionTypes } from "./action";

interface CoffesState {
    coffesAmount: CoffeAmount[];
    activeCoffe: Coffe | null;
}

export function coffeReducer(state: CoffesState, action: any) {
    switch(action.type) {
        case(CoffeActionTypes.ADD_COFFE):
            return produce(state, (draft) => {
                const newDraft = state.coffesAmount.map((coffe) => {{
                    if(coffe.name === action.payload.coffe.name) {
                        return {...coffe, quantity: coffe.quantity+1};
                    }
                    return coffe;
                }})
                draft.coffesAmount = newDraft;
            })
        case(CoffeActionTypes.DECREASE_COFFE_QUANTITY):
            return produce(state, (draft) => {
                const newDraft = state.coffesAmount.map((coffe) => {{
                    if(coffe.name === action.payload.coffe.name && coffe.quantity > 0) {
                        return {...coffe, quantity: coffe.quantity - 1};
                    }
                    return coffe;
                }})
                draft.coffesAmount = newDraft;
            })
        case(CoffeActionTypes.REMOVE_COFFE):
            return produce(state, (draft) => {
                const newDraft = state.coffesAmount.map((coffe) => {{
                    if(coffe.name === action.payload.coffe.name && coffe.quantity > 0) {
                        return {...coffe, quantity: 0};
                    }
                    return coffe;
                }})
                draft.coffesAmount = newDraft;
            })
        case(CoffeActionTypes.REMOVE_ALL_COFFE):
            return produce(state, (draft) => {
                draft.coffesAmount = coffesAmountInitial;
                draft.activeCoffe = null;
            })
        default:
            return state;
    }
}