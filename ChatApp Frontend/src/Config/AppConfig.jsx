import {Route, Routes} from "react-router";
import Home from "../Components/Home.jsx";
import ChatRoom from "../Components/ChatRoom.jsx";

const AppConfig = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/chat" element={<ChatRoom />}/>
        </Routes>
    );
}

export default AppConfig;