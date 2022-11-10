import React from "react";

export const ThemeModeContext = React.createContext({
    mode: 'light',
    toggleMode: () => {
        alert('i need to be implemented.')
    }
});

const ThemeModeProvider = ({ children }) => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');

    const toggleMode = () => {
        setMode(mode == 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeModeContext.Provider value={{ mode, toggleMode }}>
            {children}
        </ThemeModeContext.Provider>
    )
}

export default ThemeModeProvider;