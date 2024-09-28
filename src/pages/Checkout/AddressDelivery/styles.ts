import styled from "styled-components";
import { STATUS_COLOR } from "../../../components/RoundedIcon/styles";

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

export const DeliveryPaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;

    background-color: ${(props)=> props.theme['base-card']};
    border-radius: 6px;
`;

export const PaymentMethodsContainer = styled.div`
    display: flex;
    gap: 0.75rem;
`;

export const FormContainer = styled.div`
    min-width: 40rem;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

interface TitleSubtitleContainerProps {
    color: keyof typeof STATUS_COLOR;
}

export const TitleSubtitleContainer = styled.div<TitleSubtitleContainerProps>`
    display: flex;
    gap: 0.5rem;
    color: ${(props)=> props.theme['base-text']};

    svg {
        color: ${(props)=> props.theme[STATUS_COLOR[props.color]]};
    }

    span {
        font-size: 16px;
    }

    p {
        font-size: 12px;
    }
`;

export const ItemTotalBaseContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 23rem;
`;

interface ButtonPaymentContainerProps {
    selected: boolean;
}

export const ButtonPaymentContainer = styled.button<ButtonPaymentContainerProps>`
    border-radius: 6px;
    width: 11.16rem;
    height: 3.19rem;

    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 0.75rem;

    color: ${(props)=> props.theme['purple']};
    background-color: ${(props)=>
        props.selected 
        ? props.theme['purple-light']
        : props.theme['base-button']
    };
    border: ${(props) => 
        props.selected 
        ? `1px solid ${props.theme['purple']}` 
        : 'none'
    };

    &:hover {
        background-color: ${(props) => props.theme['base-hover']};
    }

    span {
        font-size: 12px;
        color: ${(props)=> props.theme['base-text']};
    }
`;