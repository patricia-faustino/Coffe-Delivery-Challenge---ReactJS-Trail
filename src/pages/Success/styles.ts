import { styled } from "styled-components";
import { CoffeCardContainer } from "../../styles/basics";

export const SuccessContainer = styled.div`
    padding-top: 5rem;
`;

export const DeliveryContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

export const TitleSubtitleSuccessContainer = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-size: 1.25rem;
        color: ${(props) => props.theme['base-subtitle']};
    }
`;

export const TitleSuccessContainer = styled.h2`
    font-size: 2rem;
    font-weight: bolder;
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme['yellow-dark']};
`;

export const MainSuccessContainer = styled.div`
    display: flex;
    gap: 6.38rem;
`;

export const CartSuccessContainer = styled(CoffeCardContainer)`
    width: 32.88rem;
    height: 16.88rem;
    padding: 2.5rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 6px 36px 6px 36px;
        padding: 1px; /* Ajuste a largura da borda conforme necessário */
        background: linear-gradient(90deg, ${(props) => props.theme['yellow']} 0%, ${(props) => props.theme['purple']} 100%);
        -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
        mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
        mask-composite: exclude; 
        -webkit-mask-composite: destination-out;
    }
`;

export const InformationSuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const SectionInformationSuccessContainer = styled.div`
    display: flex;
    gap: 0.75rem;

    div {
        font-size: 16px;
        color: ${(props) => props.theme['base-text']};

        p {
            span {
                font-weight: bold;
            }
        }

        .text-bolder {
            font-weight: bold;
        }
    }
`;