import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AppConfig from "./Config/AppConfig.jsx";
import {Toaster} from "react-hot-toast";
import {ThemeProviderWrapper} from "./Context/ThemeContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProviderWrapper>
    <BrowserRouter>
        <Toaster/>
        <AppConfig />
    </BrowserRouter>
  </ThemeProviderWrapper>
  </StrictMode>,
)
