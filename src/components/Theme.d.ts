import 'styled-components';
import { ThemeModes } from '../contexts/ThemeModeContext';

declare module 'styled-components' {
    export interface DefaultTheme {
        backgroundBase: string
        backgroundLevel1: string
        backgroundLevel2: string
        borderBase: string
        textColorBase: string
    }
}