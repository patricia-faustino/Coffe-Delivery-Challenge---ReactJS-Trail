import { styled } from "styled-components";

export const GridFormDeliveryContainer = styled.div`
    display: grid;
    gap: 1rem;
    
    .grid .rowCep {
        display: grid;
        grid-template-columns: 12.5rem;
    }

    .rowStreet {
        display: grid;
    }

    .rowNumberComplement {
        display: grid;
        grid-template-columns: 12.5rem 21.75rem;
        gap: 0.75rem;
    }

    .rowNeighborhoodCityUF {
        display: grid;
        grid-template-columns: 12.5rem 17.25rem 3.75rem;
        gap: 0.75rem;
    }

    input {
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme['base-button']};
        padding: 0.75rem 0.25rem;
        height: 2.63rem;
        background-color: ${(props) => props.theme['base-input']};
        color: ${(props) => props.theme['base-label']};
        box-shadow: none;
        outline: none;

        &:focus::placeholder, &:active::placeholder {
            color: transparent;
        }

        &:active, &:focus {
            border: 1px solid ${(props) => props.theme['yellow-dark']};
        }
    }

    .inputContainer {
        display: flex;
        align-items: center;
        position: relative;
    }

    .inputContainer input {
        flex: 1;
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme['base-button']};
        padding: 0.75rem 0.25rem;
        height: 2.63rem;
        background-color: ${(props) => props.theme['base-input']};
        color: ${(props) => props.theme['base-label']};
        box-shadow: none;
        outline: none;
    }

    .inputContainer .optionalText {
        position: absolute;
        right: 10px;
        color: ${(props) => props.theme['base-label']};
        pointer-events: none;
        font-size: 12px;
    }

    .inputContainer input:focus + .optionalText {
        display: none;
    }

    .inputContainer input:active, .inputContainer input:focus {
        border: 1px solid ${(props) => props.theme['yellow-dark']};
    }
    
`;
