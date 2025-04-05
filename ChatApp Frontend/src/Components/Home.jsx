import { Box, Button, Container, Typography, Stack } from "@mui/material";
import { useState } from "react";
import { useThemeContext } from "../Context/ThemeContext.jsx";
import { LightMode, DarkMode, MeetingRoom, AddCircle } from "@mui/icons-material";
import '@fontsource/teko';
import '@fontsource/poppins';
import Logo from '../Util/Chat-Hive Logo.png';
import JoinRoom from "./Modal/JoinRoom.jsx";
import CreateRoom from "./Modal/CreateRoom.jsx";

// 💡 Reusable Styles
const actionButtonStyle = {
    borderRadius: 20,
    fontWeight: "bold",
    px: 4,
    py: 1,
    display: "flex",
    alignItems: "center",
    gap: 1,
    fontSize: 18,
    transition: "0.3s",
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
                backgroundImage: darkMode
                    ? "linear-gradient(to right, #1b1f24, #000000, #1b1f24)"
                    : "linear-gradient(to right, #ffefba, #ffffff)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                color: darkMode ? "#fff" : "#000",
                transition: "background 0.5s ease-in-out",
            }}
        >
            <Box
                component="img"
                src={Logo}
                alt="Chat-Hive Logo"
                sx={{
                    position: "absolute",
                    top: -80,
                    left: 10,
                    width: 250, // Increase this value if you want it even bigger
                    height: "auto",
                    zIndex: 5,
                }}
            />



            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: darkMode
                        ? "rgba(0, 0, 0, 0.5)"
                        : "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(8px)",
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
                        ? "linear-gradient(45deg, #0f0f27, #16242e, #2c3464)"
                        : "linear-gradient(135deg, #6a11cb, #2575fc)",
                    borderRadius: 6,
                    maxWidth: "80vw",
                    height: "80vh",
                    mr: 25,
                    ml:25
                }}
            >
                <Button
                    onClick={toggleDarkMode}
                    variant="contained"
                    sx={{
                        position: "fixed",
                        top: 20,
                        right: 20,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        fontWeight: "bold",
                        transition: "0.3s",
                        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
                        color: "#000",
                        "&:hover": {
                            transform: "scale(1.05)",
                            background: "linear-gradient(135deg, #fad0c4, #ff9a9e)",
                        },
                    }}
                >
                    {darkMode ? <LightMode /> : <DarkMode />}
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </Button>

                <Typography
                    sx={{
                        fontSize: { xs: 60, md: 100 },
                        fontFamily: "teko",
                        background: darkMode ? "linear-gradient(90deg, #ff512f, #dd2476)" : "linear-gradient(45deg, #8a0707, #ff1e56)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 3px 6px rgba(0, 0, 0, 0.2)"

                    }}
                >
                    Welcome to<br/> Chat-Hive
                </Typography>

                <Typography
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "poppins",
                        fontSize: { xs: 16, md: 22 },
                        opacity: 0.9,
                        mb: 3,
                    }}
                >
                    Join. Chat. Connect.
                </Typography>

                <Stack direction="row" spacing={3}>
                    <Button
                        variant="contained"
                        onClick={handleJoinOpen}
                        sx={{
                            ...actionButtonStyle,
                            background: "linear-gradient(45deg, #ff6b6b, #f94c10)",
                            "&:hover": {
                                transform: "translateY(-3px)",
                                background: "linear-gradient(45deg, #f94c10, #ff6b6b)",
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
                            background: "linear-gradient(45deg, #5be57e, #36dc52)",
                            "&:hover": {
                                transform: "translateY(-3px)",
                                background: "linear-gradient(45deg, #5be57e, #36dc52)",
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
