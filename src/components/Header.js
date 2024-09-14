import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Angebote from "../pages/Angebote";
import Kontakt from "../pages/Kontakt";
import Ueber from "../pages/Ueber";
import Logo from "../assets/zcar-logo-porsche.png";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return ( 
        <Router>
        <div className="grid grid-cols-3 gap-4 m-10">
            <div>
              <img className="logo-picture" src={Logo} alt="Logo"></img>
            </div>
            <nav className="bg-white shadow dark:bg-gray-800 rounded-lg flex items-center">
            <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                <NavButton path="/" label="Home" />
                <NavButton path="/angebote" label="Angebote" />
                <NavButton path="/kontakt" label="Kontakt" />
                <NavButton path="/ueber-uns" label="Über Uns" />
            </div>
            </nav>
            <div className='flex justify-end'>
            <button
                onClick={toggleTheme}
                className="p-1 rounded-2xl bg-gray-300 dark:bg-gray-700 flex items-center justify-center w-16 h-16"
            >
                {theme === 'light' ? (
                    <Sun className="text-yellow-500 h-4 w-4" />
                ) : (
                    <Moon className="text-white h-4 w-4" />
                )}
            </button>
            </div>
        </div>
    
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/angebote" element={<Angebote />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/ueber-uns" element={<Ueber />} />
        </Routes>
      </Router>
      
  );
};
function NavButton({ path, label }) {
    const navigate = useNavigate();
  
    return (
      <button
        onClick={() => navigate(path)}
        className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
      >
        {label}
      </button>
    );
  }

export default Header;