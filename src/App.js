import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Header from "./components/Header"

export default function App() {
  return (
    <ThemeProvider>
    <body>
      <Header/>
    </body>
    </ThemeProvider>
  );
}


