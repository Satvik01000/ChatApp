import {Route, Routes} from "react-router";
import Home from "../Components/Home.jsx";

const AppConfig = () => {
    return(
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/about" element={<h1>This is my test app</h1>}/>
        </Routes>
    );
}

export default AppConfig;