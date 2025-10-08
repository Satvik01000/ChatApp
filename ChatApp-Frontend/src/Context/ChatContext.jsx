import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [roomId, setRoomId] = useState("");
    const [name, setName] = useState("");
    const [roomName, setRoomName] = useState("");
    const [connected, setConnected] = useState(false);

    return (
        <ChatContext.Provider
            value={{
                roomId,
                name,
                roomName,
                connected,
                setRoomId,
                setName,
                setRoomName,
                setConnected,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

const useChatContext = () => useContext(ChatContext);
export default useChatContext;