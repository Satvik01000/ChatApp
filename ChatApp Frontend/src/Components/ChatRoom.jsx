import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
    Box, Button, Grid, IconButton, InputBase, Paper, Typography,
    Avatar, AppBar, Toolbar
} from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import toast from "react-hot-toast";
import ConvoRoomsLogo from "../Util/ConvoRoomsLogo.jsx";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import {useThemeContext} from "../Context/ThemeContext.jsx";
import {DarkMode, LightMode} from "@mui/icons-material";



const ChatRoom = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { sender, roomId, roomName } = location.state || {};
    const { darkMode, toggleDarkMode } = useThemeContext();
    const [content, setContent] = useState('');
    const [messages, setMessages] = useState([]);
    const stompClientRef = useRef(null);

    useEffect(() => {
        const socket = new SockJS('http://localhost:8080/chat');
        const stompClient = new Client({
            webSocketFactory: () => socket,
            reconnectDelay: 5000,
            debug: (str) => console.log(str),
            onConnect: () => {
                console.log('Connected to WebSocket');
                stompClient.subscribe(`/topic/room/${roomId}`, (response) => {
                    const received = JSON.parse(response.body);
                    setMessages(prev => [...prev, received]);
                });
            },
            onStompError: (frame) => {
                console.error('STOMP error:', frame.headers['message'], frame.body);
            }
        });

        stompClient.activate();
        stompClientRef.current = stompClient;

        return () => {
            stompClient.deactivate();
        };
    }, [roomId]);

    const sendMessage = () => {
        const stompClient = stompClientRef.current;
        if (stompClient && stompClient.connected && content.trim() !== '') {
            const messagePayload = {
                roomId,
                sender,
                content
            };
            stompClient.publish({
                destination: `/app/sendMessage/${roomId}`,
                body: JSON.stringify(messagePayload)
            });
            setContent('');
        } else {
            toast.error("Cannot send empty message or not connected.");
        }
    };

    return (
        <Box sx={{ bgcolor: "background.default", height: "100vh", overflow: "hidden" }}>
            {/* Header */}
            <AppBar position="fixed" color="default" elevation={2}>
                <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ height: 90 }}>
                        <ConvoRoomsLogo />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 5, flexWrap: "wrap", justifyContent: "flex-end" }}>
                        <Typography variant="subtitle1" sx={{ color: darkMode ? "white" : "black" }}>
                            Room Name: <Box component="span" sx={{ fontWeight: 600, color: "primary.light" }}>{roomName || "Unknown"}</Box>
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: darkMode ? "white" : "black" }}>
                            Room ID: <Box component="span" sx={{ fontWeight: 600, color: "primary.light" }}>{roomId || "Unknown"}</Box>
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: darkMode ? "white" : "black" }}>
                            User: <Box component="span" sx={{ fontWeight: 600, color: "primary.light" }}>{sender || "Guest"}</Box>
                        </Typography>
                        <Button
                            variant="contained"
                            color="error"
                            sx={{ borderRadius: "999px", px: 3, py: 1, fontWeight: 600, textTransform: "none", boxShadow: "none" }}
                            onClick={() => {
                                toast.success("Leaving Room");
                                navigate("/");
                            }}
                        >
                            Leave Room
                        </Button>
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
                                    ? "linear-gradient(135deg, #f2d383, #f8b500)"
                                    : "linear-gradient(135deg, #1e3c72, #2a5298)",
                                color: !darkMode ? "white" : "black",
                                boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                                transition: "all 0.3s ease",
                                zIndex: 999,
                            }}
                        >
                            {darkMode ? <LightMode/> : <DarkMode />}
                            {darkMode ? "Light Mode" : "Dark Mode"}
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
                    mt: 5
                }}
            >
                {messages.map((msg, index) => (
                    <Box key={index} display="flex" justifyContent={msg.sender === sender ? "flex-end" : "flex-start"} mb={2}>
                        <Paper
                            elevation={3}
                            sx={{
                                bgcolor: msg.sender === sender ? "success.dark" : "grey.800",
                                color: "white",
                                p: 2,
                                maxWidth: 300,
                                borderRadius: 2,
                            }}
                        >
                            <Grid container spacing={1}>
                                <Grid item>
                                    <Avatar src={`https://avatar.iran.liara.run/public/${(msg.name?.length || 0) + index}`} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="subtitle2">{msg.sender}</Typography>
                                    <Typography variant="body2">{msg.content}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                ))}
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
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        sx={{ ml: 1, flex: 1, color: "white" }}
                    />
                    <IconButton sx={{ color: "white" }}>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton sx={{ color: "white" }} onClick={sendMessage}>
                        <SendIcon />
                    </IconButton>
                </Paper>
            </Box>
        </Box>
    );
};

export default ChatRoom;
