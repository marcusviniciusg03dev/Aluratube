import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        [ThemeMode: string]: {
            backgroundBase: string
            backgroundLevel1: string
            backgroundLevel2: string
            borderBase: string
            textColorBase: string
        }
    }
}