import styled from "styled-components";
import { CoffeCardContainer } from "../../../styles/basics";

export const SelectedCoffesToConfirmContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const CartContainer = styled(CoffeCardContainer)`
    button {
        border: none;
    }

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
    min-width: 23rem; 
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
export const TotalContainer = styled(ItemTotalBaseContainer)`
    font-weight: bold;
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
                align-items: center;
                justify-content: center;
                background-color: ${(props) => props.theme['base-button']};
                width: 5.69rem;
                height: 2rem;
                border-radius: 6px;

                transition: background-color 0.2s;

                &:hover {
                    background-color: ${(props) => props.theme['base-hover']};
                }

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

export const SucessLinkContainer = styled.div`
    button {
        background-color: ${(props) => props.theme['yellow']};
        color: ${(props) => props.theme['white']};
        border-color: transparent;
        padding: 0.5rem 0.75rem;
        width: 23rem;
        border-radius: 6px;

        &:hover {
            background-color: ${(props) => props.theme['yellow-dark']};
        }
    }
`;
