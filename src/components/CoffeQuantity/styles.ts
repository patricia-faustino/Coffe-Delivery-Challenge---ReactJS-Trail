import { styled } from "styled-components";

export const CoffeQuantityContainer = styled.div`
    display: flex;
    gap: 0.25rem;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['base-button']};
    width: 4.5rem;
    height: 2.375rem;

    border-radius: 6px;

    .coffeQuantity {
        color: ${(props) => props.theme['base-title']};
        font-size: 16px;
        font-weight: bold;
        text-align: end;
    }


    button {
        border: none;
        cursor: pointer;
        
        color: ${(props) => props.theme['purple']};
        width: 0.875rem;
        background-color: transparent;
    }

    button:active {
        outline: none;
        border: none;
        border-color: transparent;
    }
`;