import { Box } from "@mui/material";
import DarkLogo from "./Dark-Chat-Hive Logo.jpeg"
import LightLogo from "./Light-Chat-Hive Logo.png";
import { useThemeContext } from "../Context/ThemeContext.jsx";
import React from "react";

const ChatHive = () => {
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
                    top: 10,
                    left: 20,
                    width: 140,
                    height: 70,
                    zIndex: 5,
                }}
            />
        </Box>
    );
};

export default ChatHive;