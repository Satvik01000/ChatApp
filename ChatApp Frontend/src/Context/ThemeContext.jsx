import React, { createContext, useState, useMemo, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Create context
const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
    // Load dark mode preference from localStorage
    const storedMode = localStorage.getItem("darkMode") === "true";
    const [darkMode, setDarkMode] = useState(storedMode);

    // Toggle function
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            localStorage.setItem("darkMode", !prevMode);
            return !prevMode;
        });
    };

    // Memoize theme for performance
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: darkMode ? "dark" : "light",
                },
            }),
        [darkMode]
    );

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

// Custom hook to use theme context
export const useThemeContext = () => useContext(ThemeContext);
