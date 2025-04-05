import React from "react";
import { Box, Button, Container, Grid, IconButton, InputBase, Paper, Typography, Avatar, AppBar, Toolbar,
} from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

const ChatRoom = () => {
    return (
        <Box sx={{ bgcolor: "background.default", height: "100vh", overflow: "hidden" }}>
            {/* Header */}
            <AppBar position="fixed" color="default" elevation={2}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h6">Room : roomId</Typography>
                    <Typography variant="h6">User : currentUser</Typography>
                    <Button variant="contained" color="error" sx={{ borderRadius: "999px" }}>
                        Leave Room
                    </Button>
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
                }}
            >
                {/* Example Message Bubble */}
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
                                <Typography variant="subtitle2">currentUser</Typography>
                                <Typography variant="body2">This is a sample message</Typography>
                                <Typography variant="caption" color="grey.400">
                                    2 minutes ago
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>

                {/* Another Example Message Bubble */}
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
