import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
    }

    html {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    button, a {
        text-decoration: none;
        opacity: 1;

        &:hover, &:focus {
            opacity: .7;
            transition: all 0.3s;
        }
    }
`;