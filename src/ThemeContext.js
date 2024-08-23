import React, { createContext, useState, useEffect } from 'react'

 export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const initalCount = parseInt(localStorage.getItem('count')) || 0;
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const [count, setCount] = useState(initalCount);

    const toggleTheme = () => setIsDarkTheme(prevTheme => !prevTheme)
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        localStorage.setItem('count', count.toString());
    }, [count])

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, increment, count }}>
            {children}
        </ThemeContext.Provider>
    )
}