import { Box, Button, Container, Typography, Stack } from "@mui/material";
import { useThemeContext } from "../Context/ThemeContext.jsx";
import { LightMode, DarkMode, MeetingRoom, AddCircle } from "@mui/icons-material";
import '@fontsource/teko';
import '@fontsource/poppins';

function Home() {
    const { darkMode, toggleDarkMode } = useThemeContext();

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
            {/* Overlay to make text readable */}
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

            {/* Main Content */}
            <Container
                sx={{
                    position: "relative",
                    textAlign: "center",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 2,
                }}
            >

                {/* Dark Mode Switch */}
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

                {/* Chat App Title */}
                <Typography
                    sx={{
                        fontSize: { xs: 60, md: 100 },
                        fontFamily: "teko",
                        background: "linear-gradient(90deg, #ff512f, #dd2476)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                    }}
                >
                    Welcome to Chat
                </Typography>

                {/* Catchy Tagline */}
                <Typography
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "poppins",
                        fontSize: { xs: 16, md: 22 },
                        opacity: 0.9,
                        mb: 3,
                    }}
                >
                    Room Based Chat Service
                </Typography>

                {/* Call-to-Action Buttons */}
                <Stack direction="row" spacing={3}>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: 20,
                            fontWeight: "bold",
                            px: 4,
                            py: 1,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            fontSize: 18,
                            transition: "0.3s",
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
                        sx={{
                            borderRadius: 20,
                            fontWeight: "bold",
                            px: 4,
                            py: 1,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            fontSize: 18,
                            transition: "0.3s",
                            background: "linear-gradient(45deg, #36d1dc, #5b86e5)",
                            "&:hover": {
                                transform: "translateY(-3px)",
                                background: "linear-gradient(45deg, #5b86e5, #36d1dc)",
                            },
                        }}
                    >
                        <AddCircle />
                        Create Room
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}

export default Home;