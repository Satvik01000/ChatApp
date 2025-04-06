import { Box } from "@mui/material";
import Logo from "./Chat-Hive Logo.png";
import React from "react";

const ChatHiveLogo = () => (
    <Box sx={{ bgcolor: "background.default", height: "100vh", overflow: "hidden" }}>
        {/* Logo */}
        <Box
            component="img"
            src={Logo}
            alt="Chat-Hive Logo"
            sx={{
                position: "absolute",
                top: -80,
                left: 10,
                width: 250,
                height: "auto",
                zIndex: 5,
            }}
        />
    </Box>
);

export default ChatHiveLogo;