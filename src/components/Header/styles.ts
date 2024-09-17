import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 6.5rem;
`;

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 12.07rem;
    height: 2.375rem;
    font-size: 0.875rem;

    .location, nav {
        display: flex;
        align-items: center;
        border-radius: 6px;
        padding: 0 0.5rem;
        gap: 0.35rem;

    }

    .location {
        background-color: ${(props) => props.theme['purple-light']};
        color: ${(props) => props.theme['purple-dark']};

        svg {
            color: ${(props) => props.theme['purple']};
            box-shadow: 0 2px 0px rgba(0, 0, 0, 0.025);
        }
    }

    nav {
        background-color: ${(props) => props.theme['yellow-light']};
        position: relative; /* Necessário para posicionamento absoluto do círculo */

        span {
            width: 1.25rem;
            height: 1.25rem;
            background-color: ${(props) => props.theme['yellow-dark']};
            border-radius: 50%;
            position: absolute;
            top: -10px; /* Ajuste conforme necessário */
            right: -0.625rem; /* Ajuste conforme necessário */
            color: ${(props) => props.theme['white']};
            text-align: center;
            font-size: 14px;
            font-weight: bold;
        }
    }
`;

