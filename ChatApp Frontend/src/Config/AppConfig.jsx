import { Route, Routes } from "react-router";
import Home from "../Components/Home.jsx";
import ChatRoom from "../Components/ChatRoom.jsx";
import { ChatProvider } from "../Context/ChatContext.jsx";

const AppConfig = () => {
    return (
        <ChatProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<ChatRoom />} />
            </Routes>
        </ChatProvider>
    );
};

export default AppConfig;
