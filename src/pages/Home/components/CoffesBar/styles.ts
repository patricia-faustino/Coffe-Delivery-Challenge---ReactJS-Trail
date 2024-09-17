import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const CoffesContainer= styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.375rem;
    
    padding: 2rem 0;

`;

export const CoffesGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    column-gap: 2rem;
    row-gap: 2.5rem;
`;

export const CoffeElementContainer = styled.div`
    width: 16rem;
    height: 19.38rem;

    border-radius: 6px 36px 6px 36px;
    background-color: ${(props) => props.theme['base-card']};

    position: relative;

    img {
        position: absolute;
        top: -1.25rem;
        right: 4.875rem;
    }
`;

export const CoffeInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    position: absolute;
    top: 6.25rem;
`;

export const TagContainer = styled.div`
    display: flex;
    gap: 0.25rem;

   span {
    border-radius: 100px;
    color: ${(props) => props.theme['yellow-dark']}; 
    background-color: ${(props) => props.theme['yellow-light']};   
    padding: 0 8px;
   }
`;

export const CoffeDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    text-align: center;
    width: 16rem;

    span {
        font-family: 'Baloo2', sans-serif;
        font-size: 20px;
        font-weight: bolder;
        color: ${(props) => props.theme['base-subtitle']};
        width: 13.5rem;
    }

    p {
        font-size: 14px;
        color: ${(props) => props.theme['base-label']};
        width: 13.5rem;
    }
`;

export const CoffePriceContainer = styled.div`
    display: flex;
    gap: 1rem;
    height: 2.375rem;
    align-items: end;
    margin-top: 1rem;

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        width: 2.375rem;
        background-color: ${(props) => props.theme['purple']};
    }

`;

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

export const CoffeCartContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;