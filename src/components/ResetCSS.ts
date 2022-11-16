import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        color: ${({ theme }) => theme.textColorBase};
        display: flex;
        flex: 1;
        overflow-x: hidden;
        overflow-y: visible;
    }

    html {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        overflow-y: initial;
    }

    #__next {
        display: flex;
        flex: 1;
    }

    button, a {
        text-decoration: none;
        opacity: 1;

        &:hover, &:focus {
            opacity: .7;
            transition: all 0.3s;
        }
    }

    ::-webkit-scrollbar {
        width: 0px;
        height: 8px;
        background-color: transparent;
        -webkit-appearance: none;
        appearance: none;
    }

    ::-webkit-scrollbar-thumb {
        width: 0px;
        height: 8px;
        background-color: transparent;
        -webkit-appearance: none;
        appearance: none;
    }
`;