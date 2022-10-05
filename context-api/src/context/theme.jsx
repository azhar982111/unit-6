import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const [isDarkMode, setisDarkMode] = useState(false);

    const toggleTheme = () => {
        setisDarkMode(!isDarkMode)
    };


    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;