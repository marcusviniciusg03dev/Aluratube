import React from "react";
import { ThemeProvider } from "styled-components";
import RegisterVideo from "../components/RegisterVideo";
import ResetCSS from "../components/ResetCSS";
import PlaylistProvider from "../contexts/PlaylistsContext";
import ThemeModeProvider, { ThemeModeContext, ThemeModes } from "../contexts/ThemeModeContext";

const themes = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    },
};

const MyApp = ({ Component, pageProps }) => {
    const themeModecontext = React.useContext(ThemeModeContext);

    return (
        <ThemeProvider theme={themes[themeModecontext.mode]}>
            <PlaylistProvider>
                <ResetCSS />
                <Component {...pageProps} />
                <RegisterVideo />
            </PlaylistProvider>
        </ThemeProvider>
    )
}

export default function _App({ Component, pageProps }) {
    return (
        <ThemeModeProvider>
            <MyApp Component={Component} pageProps={pageProps} />
        </ThemeModeProvider>
    )
};