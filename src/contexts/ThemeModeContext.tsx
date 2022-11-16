import React from "react";

export type ThemeModes = 'light' | 'dark';

interface IThemeModeContext {
    mode: ThemeModes
    toggleMode: () => void
}

export const ThemeModeContext = React.createContext<IThemeModeContext>({
    mode: 'light',
    toggleMode: () => {
        alert('i need to be implemented.')
    }
});

const ThemeModeProvider = ({ children }) => {
    const [mode, setMode] = React.useState<ThemeModes>('light');

    React.useEffect(() => {
        if(!window) return;

        const modeFromStorage = window.localStorage.getItem('theme_mode');

        setMode(['light', 'dark'].some(value => value == modeFromStorage) ? (modeFromStorage as ThemeModes) : 'light');
    }, [mode]);

    const toggleMode = () => {
        const toMode = mode == 'light' ? 'dark' : 'light';
        window.localStorage.setItem('theme_mode', toMode);
        setMode(toMode);
    }

    return (
        <ThemeModeContext.Provider value={{ mode, toggleMode }}>
            {children}
        </ThemeModeContext.Provider>
    )
}

export default ThemeModeProvider;