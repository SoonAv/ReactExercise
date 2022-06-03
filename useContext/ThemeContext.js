import { useState, createContext } from "react";
const ThemeContext = createContext()
const ThemeProvider = function ({ children }) {
    const [theme, setTheme] = useState('dark')
    const HandleClick = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    const value ={
        theme,
        HandleClick
    }
    return (
        <ThemeContex.Provider value={value}>
            {childrens}
        </ThemeContex.Provider>
    )
}
export { ThemeContex, ThemeProvider }