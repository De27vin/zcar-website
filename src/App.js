import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Angebote from "./pages/Angebote";
import Kontakt from "./pages/Kontakt";
import Ueber from "./pages/Ueber";

export default function App() {
  return (
    <Router>
      <header>
        <nav className="bg-white shadow dark:bg-gray-800">
          <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <NavButton path="/" label="Home" />
            <NavButton path="/angebote" label="Angebote" />
            <NavButton path="/kontakt" label="Kontakt" />
            <NavButton path="/ueber-uns" label="Über Uns" />
          </div>
        </nav>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/angebote" element={<Angebote />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/ueber-uns" element={<Ueber />} />
      </Routes>
    </Router>
  );
}

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
