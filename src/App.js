import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
    
    <ThemeProvider>
    <div className="bg-gray-100 dark:bg-gray-600 min-h-screen pt-10">
      <Header/>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}


