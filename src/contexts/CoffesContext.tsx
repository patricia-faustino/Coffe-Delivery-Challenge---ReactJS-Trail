import { createContext, MouseEventHandler, ReactNode, useReducer } from "react";
import ExpressoTradicional from '../assets/expresso.svg';
import ExpressoAmericano from '../assets/expresso_americano.svg';
import ExpressoCremoso from '../assets/expresso_cremoso.svg';
import ExpressoGelado from '../assets/cafe_gelado.svg';
import CafeComLeite from '../assets/cafe_com_leite.svg';
import Latte from '../assets/latte.svg';
import Capuccino from '../assets/capuccino.svg';
import Macchiato from '../assets/macchiato.svg';
import Mocaccino from '../assets/mocaccino.svg';
import ChocolateQuente from '../assets/chocolate_quente.svg';
import Cubano from '../assets/cubano.svg';
import Havaiano from '../assets/havaiano.svg';
import Arabe from '../assets/arabe.svg';
import Irlandes from '../assets/irlandes.svg';
import { produce } from "immer";


export interface Coffe {
    tags: string[];
    name: string;
    description: string;
    price: number;
    src: any;
}

export interface CoffeAmount extends Coffe {
    quantity: number;
}

interface CoffesState {
    coffesAmount: CoffeAmount[];
    activeCoffe: Coffe | null;
}

interface CoffesContextProviderProps {
    children: ReactNode;
}

interface CoffesContextType extends CoffesState {
    addAmountCoffe: ( event: React.MouseEvent<HTMLButtonElement, MouseEvent>, coffe: Coffe) => void;
    removeCoffe: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, coffe: Coffe) => void;
    decreaseQuantityCoffe: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, coffe: Coffe) => void;
}

export const CoffesContext = createContext({} as CoffesContextType);

const coffesAmountInitial : CoffeAmount[] = [
    {
        tags:["Tradicional"],
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 9.90,
        src: ExpressoTradicional,
        quantity: 0
    },
    {
        tags:["Tradicional"],
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 9.90,
        src: ExpressoAmericano,
        quantity: 0

    },
    {
        tags:["Tradicional"],
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: 9.90,
        src: ExpressoCremoso,
        quantity: 0
    },
    {
        tags:["Tradicional", "Gelado"],
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 9.90,
        src: ExpressoGelado,
        quantity: 0
    },
    {
        tags:["Tradicional", "Com Leite"],
        name: "Café com Leite",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 9.90,
        src: CafeComLeite,
        quantity: 0

    },
    {
        tags:["Tradicional", "Com Leite"],
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price: 9.90,
        src: Latte,
        quantity: 0

    },
    {
        tags:["Tradicional", "Com Leite"],
        name: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: 9.90,
        src: Capuccino,
        quantity: 0

    },
    {
        tags:["Tradicional", "Com Leite"],
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        price: 9.90,
        src: Macchiato,
        quantity: 0

    },
    {
        tags:["Tradicional", "Com Leite"],
        name: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 9.90,
        src: Mocaccino,
        quantity: 0
    },
    {
        tags:["Especial", "Com Leite"],
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 9.90,
        src: ChocolateQuente,
        quantity: 0
    },
    {
        tags:["Tradicional", "Alcoólico", "Gelado"],
        name: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: 9.90,
        src: Cubano,
        quantity: 0

    },
    {
        tags:["Especial"],
        name: "Havaiano",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 9.90,
        src: Havaiano,
        quantity: 0
    },
    {
        tags:["Especial"],
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 9.90,
        src: Arabe,
        quantity: 0

    },
    {
        tags:["Especial", "Alcoólico"],
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: 9.90,
        src: Irlandes,
        quantity: 0
    }
]


export function CoffesContextProvider({children}: CoffesContextProviderProps) {

    const [coffes, dispatch] = useReducer((state: CoffesState, action: any) => {
        if(action.type === 'ADD_COFFE_QUANTITY') {
            return produce(state, (draft) => {
                const newDraft = state.coffesAmount.map((coffe) => {{
                    if(coffe.name === action.payload.coffe.name) {
                        return {...coffe, quantity: coffe.quantity+1};
                    }
                    return coffe;
                }})
                draft.coffesAmount = newDraft;
            })
        }
        if(action.type === 'DECREASE_COFFE_QUANTITY') {
            return produce(state, (draft) => {
                const newDraft = state.coffesAmount.map((coffe) => {{
                    if(coffe.name === action.payload.coffe.name && coffe.quantity > 0) {
                        return {...coffe, quantity: coffe.quantity - 1};
                    }
                    return coffe;
                }})
                draft.coffesAmount = newDraft;
            })
        }
        if(action.type === 'REMOVE_TOTAL_QUANTITY') {
            return produce(state, (draft) => {
                const newDraft = state.coffesAmount.map((coffe) => {{
                    if(coffe.name === action.payload.coffe.name && coffe.quantity > 0) {
                        return {...coffe, quantity: 0};
                    }
                    return coffe;
                }})
                draft.coffesAmount = newDraft;
            })
        }
        return state;
    }, {
        coffesAmount: coffesAmountInitial,
        activeCoffe: null
    })

    const { coffesAmount, activeCoffe } = coffes;

    function addAmountCoffe(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        coffe: Coffe
    ) {
        
        dispatch({
            type: 'ADD_COFFE_QUANTITY',
            payload: { coffe }
        });
    }


    function decreaseQuantityCoffe(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, coffe: Coffe) {
        // console.log(coffe);
        dispatch({
            type: 'DECREASE_COFFE_QUANTITY',
            payload: { coffe }
        });
    }

    function removeCoffe(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        coffe: Coffe
    ) {

        // console.log(coffe);
        dispatch({
            type: 'REMOVE_TOTAL_QUANTITY',
            payload: { coffe }
        });
    }

    return(
        <CoffesContext.Provider 
            value={{ 
                coffesAmount,
                activeCoffe,
                addAmountCoffe,
                removeCoffe,
                decreaseQuantityCoffe,
            }}>
            {children}
        </CoffesContext.Provider>
    );
}

