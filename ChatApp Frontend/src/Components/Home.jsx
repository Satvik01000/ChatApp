import { Box, Button, Container, Typography, Stack } from "@mui/material";
import { useState } from "react";
import { useThemeContext } from "../Context/ThemeContext.jsx";
import { LightMode, DarkMode, MeetingRoom, AddCircle } from "@mui/icons-material";
import '@fontsource/teko';
import '@fontsource/poppins';
import JoinRoom from "./Modal/JoinRoom.jsx";
import CreateRoom from "./Modal/CreateRoom.jsx";
import ChatHiveLogo from "../Util/ChatHiveLogo.jsx";
import Typewriter from "typewriter-effect";

const actionButtonStyle = {
    borderRadius: 20,
    fontWeight: "bold",
    px: 4,
    py: 1.5,
    display: "flex",
    alignItems: "center",
    gap: 1,
    fontSize: 18,
    transition: "0.3s ease",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
};

const Home = () => {
    const { darkMode, toggleDarkMode } = useThemeContext();
    const [joinModalOpen, setJoinModalOpen] = useState(false);
    const [createModalOpen, setCreateModalOpen] = useState(false);

    const handleJoinOpen = () => setJoinModalOpen(true);
    const handleJoinClose = () => setJoinModalOpen(false);
    const handleCreateOpen = () => setCreateModalOpen(true);
    const handleCreateClose = () => setCreateModalOpen(false);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: darkMode
                    ? "linear-gradient(-45deg, #0f0f27, #1f1f47, #2c3464, #0f0f27)"
                    : "linear-gradient(-45deg, #ffe29f, #ffa99f, #ffefba, #ffffff)",
                backgroundSize: "400% 400%",
                animation: "gradientShift 20s ease infinite",
                position: "relative",
                color: darkMode ? "#fff" : "#000",
                overflow: "hidden",
            }}
        >
            <ChatHiveLogo />


            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: darkMode
                        ? "rgba(0, 0, 0, 0.4)"
                        : "rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(10px)",
                    zIndex: 1,
                }}
            />

            <Container
                sx={{
                    position: "relative",
                    textAlign: "center",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                    background: darkMode
                        ? "rgba(15, 15, 39, 0.7)"
                        : "rgba(255, 255, 255, 0.7)",
                    borderRadius: 6,
                    boxShadow: darkMode
                        ? "0 0 30px rgba(255, 255, 255, 0.08)"
                        : "0 0 30px rgba(0, 0, 0, 0.1)",
                    maxWidth: "85vw",
                    height: "80vh",
                    mx: "auto",
                }}
            >
                <Button
                    onClick={toggleDarkMode}
                    variant="contained"
                    sx={{
                        position: "fixed",
                        top: 20,
                        right: 20,
                        fontWeight: "bold",
                        px: 3,
                        py: 1,
                        background: darkMode
                            ? "linear-gradient(135deg, #fceabb, #f8b500)"
                            : "linear-gradient(135deg, #1e3c72, #2a5298)",
                        color: "#fff",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },
                        transition: "all 0.3s ease",
                        zIndex: 999,
                    }}
                >
                    {darkMode ? <LightMode /> : <DarkMode />}
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </Button>

                <Typography
                    sx={{
                        fontSize: { xs: 60, md: 100 },
                        fontFamily: "teko",
                        background: darkMode
                            ? "linear-gradient(90deg, #ff6a00, #ee0979)"
                            : "linear-gradient(90deg, #00c6ff, #0072ff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "fadeInZoom 1.2s ease-out",
                        textShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
                        mb: 1,
                    }}
                >
                    Welcome to<br /> Chat-Hive
                </Typography>

                <Typography
                    component="div"
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "poppins",
                        fontSize: { xs: 16, md: 22 },
                        opacity: 0.9,
                        mb: 4,
                        color: darkMode ? "#ddd" : "#333",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "40px",
                    }}
                >
                    <Typewriter
                        options={{
                            strings: [
                                "Chat in real-time",
                                "Connect globally",
                                "Create secure rooms",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 30,
                        }}
                    />
                </Typography>

                <Stack direction="row" spacing={3}>
                    <Button
                        variant="contained"
                        onClick={handleJoinOpen}
                        sx={{
                            ...actionButtonStyle,
                            background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "0 12px 24px rgba(255, 65, 108, 0.3)",
                            },
                        }}
                    >
                        <MeetingRoom />
                        Join Room
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleCreateOpen}
                        sx={{
                            ...actionButtonStyle,
                            background: "linear-gradient(45deg, #00b09b, #96c93d)",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "0 12px 24px rgba(0, 176, 155, 0.3)",
                            },
                        }}
                    >
                        <AddCircle />
                        Create Room
                    </Button>
                </Stack>
            </Container>

            <JoinRoom open={joinModalOpen} handleClose={handleJoinClose} />
            <CreateRoom open={createModalOpen} handleClose={handleCreateClose} />
        </Box>
    );
};

export default Home;