import { Box } from "@mui/material";
import DarkLogo from "./Dark-Convo-Rooms Logo.png";
import LightLogo from "./Light-Convo-Rooms Logo.png";
import { useThemeContext } from "../Context/ThemeContext.jsx";
import React from "react";

const ConvoRoomsLogo = () => {
    const { darkMode, toggleDarkMode } = useThemeContext(); // Correctly destructure the context

    return (
        <Box>
            {/* Logo */}
            <Box
                component="img"
                src={!darkMode ? LightLogo : DarkLogo}
                alt="Convo-Rooms Logo"
                sx={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    width: 200,
                    height: "auto",
                    zIndex: 5,
                }}
            />
        </Box>
    );
};

export default ConvoRoomsLogo;