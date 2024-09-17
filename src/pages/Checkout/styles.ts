import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    gap:2rem;

    
`;

export const FormContainer = styled.div`
    width: 40rem;

`;

export const CoffesSelectedContainer = styled.div`
    background-color: ${(props) => props.theme['base-card']};
    height: 31.125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 2.5rem;

`;

export const CoffePriceElementContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 23rem;
    height: 5rem;


    img {
        width: 4rem;
        height: 4rem;
    }
    /* flex-direction: column; */
`;

export const CoffeElementContainer = styled.div`
    display: flex;
    gap: 1.25rem;
    padding: 0.5rem 0;

    .title_quantity {

        span {
            font-size: 16px;
        }

        .quantity {
            display: flex;
            gap: 0.5rem;

            .button_remove {
 

                display: flex;
                /* gap: 0.25rem; */
                align-items: center;
                justify-content: center;
                background-color: ${(props) => props.theme['base-button']};
                width: 5.69rem;
                height: 2rem;

                border: none;
                cursor: pointer;
                border-radius: 6px;

                span {
                    color: ${(props) => props.theme['base-text']};
                    font-size: 12px;
                    line-height: 160%;
                }

                svg {
                    color: ${(props) => props.theme['purple']};

                }
            }

            button:active {
                outline: none;
                border: none;
                border-color: transparent;
            }
        }

    }

`;