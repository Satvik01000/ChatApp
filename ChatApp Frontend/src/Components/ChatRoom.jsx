import React from "react";
import {useLocation, useNavigate} from "react-router";
import {
    Box, Button, Grid, IconButton, InputBase, Paper, Typography, Avatar, AppBar, Toolbar
} from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import toast from "react-hot-toast";
import ChatHiveLogo from "../Util/ChatHiveLogo.jsx";

const ChatRoom = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { name, roomId, roomName } = location.state || {};

    return (
        <Box sx={{ bgcolor: "background.default", height: "100vh", overflow: "hidden" }}>
            {/* Header */}
            <AppBar position="fixed" color="default" elevation={2}>
                <Toolbar sx={{ justifyContent: "space-between", alignItems: "center", mb:3}}>
                    <Box sx={{height: 60}}>
                        <ChatHiveLogo />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                            flexWrap: "wrap",
                            justifyContent: "flex-end",
                            mt:3
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{ color: "grey.300", letterSpacing: 0.5 }}
                        >
                            Room Name:{" "}
                            <Box component="span" sx={{ fontWeight: 600, color: "primary.light" }}>
                                {roomName || "Unknown"}
                            </Box>
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            sx={{ color: "grey.300", letterSpacing: 0.5 }}
                        >
                            Room ID:{" "}
                            <Box component="span" sx={{ fontWeight: 600, color: "primary.light" }}>
                                {roomId || "Unknown"}
                            </Box>
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            sx={{ color: "grey.300", letterSpacing: 0.5 }}
                        >
                            User:{" "}
                            <Box component="span" sx={{ fontWeight: 600, color: "primary.light" }}>
                                {name || "Guest"}
                            </Box>
                        </Typography>

                        <Button
                            variant="contained"
                            color="error"
                            sx={{
                                borderRadius: "999px",
                                px: 3,
                                py: 1,
                                fontWeight: 600,
                                textTransform: "none",
                                boxShadow: "none",
                            }}
                            onClick={() => {
                                toast.custom("Leaving Room");
                                navigate("/");
                            }}
                        >
                            Leave Room
                        </Button>
                    </Box>
                </Toolbar>


            </AppBar>

            {/* Chat Messages Area */}
            <Box
                sx={{
                    pt: 10,
                    pb: 10,
                    px: 3,
                    height: "calc(100vh - 128px)",
                    overflowY: "auto",
                    width: { xs: "100%", md: "66%" },
                    mx: "auto",
                    mt:5
                }}
            >
                <Box display="flex" justifyContent="flex-end" mb={2}>
                    <Paper
                        elevation={3}
                        sx={{
                            bgcolor: "success.dark",
                            color: "white",
                            p: 2,
                            maxWidth: 300,
                            borderRadius: 2,
                        }}
                    >
                        <Grid container spacing={1}>
                            <Grid item>
                                <Avatar src="https://avatar.iran.liara.run/public/43" />
                            </Grid>
                            <Grid item xs>
                                <Typography variant="subtitle2">{name || "currentUser"}</Typography>
                                <Typography variant="body2">This is a sample message</Typography>
                                <Typography variant="caption" color="grey.400">
                                    2 minutes ago
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>

                <Box display="flex" justifyContent="flex-start" mb={2}>
                    <Paper
                        elevation={3}
                        sx={{
                            bgcolor: "grey.800",
                            color: "white",
                            p: 2,
                            maxWidth: 300,
                            borderRadius: 2,
                        }}
                    >
                        <Grid container spacing={1}>
                            <Grid item>
                                <Avatar src="https://avatar.iran.liara.run/public/43" />
                            </Grid>
                            <Grid item xs>
                                <Typography variant="subtitle2">otherUser</Typography>
                                <Typography variant="body2">Hello there!</Typography>
                                <Typography variant="caption" color="grey.400">
                                    5 minutes ago
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </Box>

            {/* Input Box */}
            <Box
                sx={{
                    position: "fixed",
                    bottom: 16,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    px: 2,
                }}
            >
                <Paper
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: { xs: "100%", md: "50%" },
                        px: 2,
                        py: 1,
                        borderRadius: 999,
                        bgcolor: "grey.900",
                    }}
                >
                    <InputBase
                        placeholder="Type your message here..."
                        sx={{ ml: 1, flex: 1, color: "white" }}
                    />
                    <IconButton sx={{ color: "white" }}>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton sx={{ color: "white" }}>
                        <SendIcon />
                    </IconButton>
                </Paper>
            </Box>
        </Box>
    );
};

export default ChatRoom;
