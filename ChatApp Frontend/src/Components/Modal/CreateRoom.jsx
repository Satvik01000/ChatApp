import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import {useState} from "react";
import {BaseURL} from "../../Util/BaseURL.js";
import axios from "axios";
import {useNavigate} from "react-router";
import toast from "react-hot-toast";
const CreateRoom = ({ open, handleClose }) => {
    const [name, setName] = useState("");
    const [roomId, setRoomId] = useState("");
    const [roomName, setRoomName] = useState("");
    const navigate = useNavigate();
    const handleCreateRoom = async () => {
        try {
            const response = await axios.post(`${BaseURL}/room`, {roomId, roomName});
            if(response.status === 201) {
                toast.success("Room created! Redirecting");
                navigate("/chat", {state :{name, roomId, roomName}});
            }else if(response.status === 400) {
                toast.error("Room already exists!");
                navigate("/");
            }
        }catch (error) {
            toast.error(error.message);
            navigate("/");
        }
    }
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
                    Create a Room
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
                    label="Room Name"
                    variant="outlined"
                    fullWidth
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
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
                    disabled={!name || !roomId || !roomName}  // <- disable if any field is empty
                    sx={{
                        backgroundColor: "#00bcd4",
                        color: "black",
                        fontWeight: "bold",
                        '&:hover': {
                            backgroundColor: "#00acc1",
                        },
                    }}
                    onClick={handleCreateRoom}
                >
                    Create Room
                </Button>

            </Box>
        </Modal>
    );
};

export default CreateRoom;
