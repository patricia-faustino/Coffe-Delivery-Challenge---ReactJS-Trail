import styled from 'styled-components';

export const PresentationContainer = styled.div`
    display: flex;
    justify-content: space-between;

    padding-top: 5.75rem;

    section {
        display: flex;
        flex-direction: column;
        width: 36.75rem;
        gap: 4.125rem;
    }
`;

export const TitleContainer = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        font-size: 48px;
        font-weight: bolder;
        color: ${(props) => props.theme['base-title']};
    }

    p {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 20px;
    }
`;

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    row-gap: 20px;
    column-gap: 40px;
    font-size: 16px;
`;

export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem; 

    /* .icon {
        height: 2rem;
        width: 2rem;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        &.mapPin {
            background-color: ${(props) => props.theme['yellow-dark']};
        }

        &.package {
            background-color: ${(props) => props.theme['base-text']};
        }

        &.coffe {
            background-color: ${(props) => props.theme['purple']};
        }

        &.timer {
            background-color: ${(props) => props.theme['yellow']};
        }
    } */
`;