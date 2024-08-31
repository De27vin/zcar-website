import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';
import Header from "./components/Header"
import Home from "./pages/Home";
import Angebote from "./pages/Angebote";
import Kontakt from "./pages/Kontakt";
import Ueber from "./pages/Ueber";

export default function App() {
  return (
    <ThemeProvider>
    <body>
      <Header/>
    </body>
    </ThemeProvider>
  );
}


