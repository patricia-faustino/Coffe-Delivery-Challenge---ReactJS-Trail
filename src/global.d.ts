export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 130%;

    }

    :focus {
        outline: 0;
    }

    body {
        background: ${(props) => props.theme['white']};
        color: ${(props) => props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;
        line-height: 130%;
    }

    button {
        all: unset;
        border: none;
        outline: none;
        cursor: pointer;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;