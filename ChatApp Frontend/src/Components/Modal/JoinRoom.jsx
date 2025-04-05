import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import {useState} from "react";
const JoinRoom = ({ open, handleClose }) => {
    const [name, setName] = useState("");
    const [roomId, setRoomId] = useState("");

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    backgroundColor: "#1e1e1e",
                    width: { xs: "80%", sm: "60%", md: "40%" },
                    height: "fit-content",
                    p: 4,
                    mx: "auto",
                    my: "15%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 4,
                    boxShadow: 24,
                    color: "white",
                }}
            >
                <Typography variant="h5" mb={4} sx={{ fontWeight: "bold" }}>
                    Join a Room
                </Typography>

                <TextField
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                        input: { color: "white" },
                        label: { color: "grey.400" },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderRadius: 5, borderColor: "#555" },
                            '&:hover fieldset': { borderRadius: 5, borderColor: "#888" },
                            '&.Mui-focused fieldset': { borderRadius: 5, borderColor: "#00bcd4" },
                        },
                        mb: 3,
                    }}
                />

                <TextField
                    label="Room ID"
                    variant="outlined"
                    fullWidth
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    sx={{
                        input: { color: "white" },
                        label: { color: "grey.400" },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderRadius: 5, borderColor: "#555" },
                            '&:hover fieldset': { borderRadius: 5, borderColor: "#888" },
                            '&.Mui-focused fieldset': { borderRadius: 5, borderColor: "#00bcd4" },
                        },
                        mb: 4,
                    }}
                />

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#00bcd4",
                        color: "black",
                        fontWeight: "bold",
                        '&:hover': {
                            backgroundColor: "#00acc1",
                        },
                    }}
                >
                    Join
                </Button>
            </Box>
        </Modal>
    );
};

export default JoinRoom;
