import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router";
import AppConfig from "./Config/AppConfig.jsx";
import { Toaster } from "react-hot-toast";
import { ThemeProviderWrapper } from "./Context/ThemeContext.jsx";
window.global = window;

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProviderWrapper>
            <BrowserRouter>
                <Toaster />
                <AppConfig />
            </BrowserRouter>
        </ThemeProviderWrapper>
    </StrictMode>
);
