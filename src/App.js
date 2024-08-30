import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Angebote from "./pages/Angebote.js";
import Kontakt from "./pages/Kontakt.js";
import Ueber from "./pages/Ueber.js";

export default function App() {





return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/angebote" element={<Angebote />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/ueber-uns" element={<Ueber />} />
        </Routes>
      </Router>
    </div>
  );
}