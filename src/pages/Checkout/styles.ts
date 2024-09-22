import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CoffeCardContainer } from "../../styles/basics";
import { STATUS_COLOR } from "../../components/RoundedIcon/styles";

export const CheckoutContainer = styled.div`
    display: flex;
    gap: 2rem;

    button {
        border: none;
        cursor: pointer;
    }
    
    button:active {
        outline: none;
        border: none;
        border-color: transparent;
    }
`;

export const SectionTitleContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

`;

export const FormDeliveryContainer = styled.div`
    padding: 2.5rem;
    background-color: ${(props)=> props.theme['base-card']};

    display: flex;
    flex-direction: column;
    gap: 2rem;

    border-radius: 6px;

`;

export const GridFormDelivery = styled.div`
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
        border: 1px solid ${(props)=> props.theme['base-button']};

        padding: 0.75rem 0.25rem;
        height: 2.63rem;
        background-color: ${(props)=> props.theme['base-input']};
        color:${(props)=> props.theme['base-label']};
        outline: none;
        box-shadow: none;
    }

    input:active, input:focus {
        box-shadow: none;
        outline: none;
    }

`;

export const DeliveryPaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;


    background-color: ${(props)=> props.theme['base-card']};
    border-radius: 6px;
`;

export const PaymentMethods = styled.div`

    display: flex;
    gap: 0.75rem;

    button {
        border-radius: 6px;
        width: 11.16rem;
        height: 3.19rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;

        color: ${(props)=> props.theme['purple']};
        background-color: ${(props)=> props.theme['base-button']};
        span {
            font-size: 12px;
            color: ${(props)=> props.theme['base-text']};
        }

    }
`;

export const FormContainer = styled.form`
    min-width: 40rem;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const CartTitleContainer = styled.div`
`;

interface TitleSubtitleContainerProps {
    colorSvg: keyof typeof STATUS_COLOR;

}

export const TitleSubtitleContainer = styled.div<TitleSubtitleContainerProps>`
    display: flex;
    gap: 0.5rem;
    color: ${(props)=> props.theme['base-text']};

    svg {
        color: ${(props)=> props.theme[STATUS_COLOR[props.colorSvg]]};
    }

    span {
        font-size: 16px;
    }

    p {
        font-size: 12px;
    }
`;

export const CartContainer = styled(CoffeCardContainer)`
    height: 31.125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 2.5rem;
`;

export const CoffesSelectedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 14.5rem;
    min-width: 23rem; /*adicionar herança*/
    overflow: auto;
    border-bottom: 1px solid ${(props) => props.theme['base-button']};
`;

export const CoffePriceElementContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 23rem;
    min-height: 5rem;


    img {
        width: 4rem;
        height: 4rem;
    }
    /* flex-direction: column; */
`;

export const ItemTotalBaseContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 23rem;
`;

export const TotalDeliveryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;
export const TotalItemsCoffeContainer = styled(ItemTotalBaseContainer)``;
export const DeliveryCoffeContainer = styled(ItemTotalBaseContainer)``;
export const TotalContainer = styled(ItemTotalBaseContainer)``;


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
                align-items: center;
                justify-content: center;
                background-color: ${(props) => props.theme['base-button']};
                width: 5.69rem;
                height: 2rem;

                border-radius: 6px;

                span {
                    color: ${(props) => props.theme['base-text']};
                    font-size: 12px;
                    line-height: 160%;
                }

                svg {
                    color: ${(props) => props.theme['purple']};

                }
            }}}
`;

export const SucessLinkContainer = styled(NavLink)`

    button {
        background-color: ${(props) => props.theme['yellow']};
        color: ${(props) => props.theme['white']};
        border-color: transparent;
        padding: 0.5rem 0.75rem;
        width: 23rem;
        border-radius: 6px;
    }
`;