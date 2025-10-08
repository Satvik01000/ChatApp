import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import {useState} from "react";
import axios from "axios";
import {BaseURL} from "../../Util/BaseURL.js";
import {useNavigate} from "react-router";
import toast from "react-hot-toast";
const JoinRoom = ({ open, handleClose }) => {
    const [sender, setSender] = useState("");
    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate();
    const handleJoinRoom = async () => {
        try {
            const response = await axios.get(`${BaseURL}/room/${roomId}`);
            if (response.status === 200) {
                console.log(response.data);
                toast.success("Joining the room");
                navigate("/chat", { state: { sender, roomId, roomName: response.data.roomName } });
                localStorage.setItem("sender", response.data.sender);
            } else {
                toast.error("No such room exists");
                navigate("/");
            }
        } catch (error) {
            toast.error("No such room exists");
            navigate("/");
        }
    };

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
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}
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
                    disabled={!roomId || !sender}
                    sx={{
                        backgroundColor: "#00bcd4",
                        color: "black",
                        fontWeight: "bold",
                        '&:hover': {
                            backgroundColor: "#00acc1",
                        },
                    }}
                    onClick={handleJoinRoom}
                >
                    Join
                </Button>
            </Box>
        </Modal>
    );
};

export default JoinRoom;
