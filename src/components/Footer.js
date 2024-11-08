import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useTheme } from '../context/ThemeContext';
import Logo from "../assets/zcar-logo-porsche.png"
import AS_ICON from "../assets/autoscout24-icon.png"
import GH_ICON from "../assets/github-icon.png"


export default function Header() {
    const { theme, toggleTheme } = useTheme();
    return (     
    <footer class="w-full mt-72">
        <Router>
        <div class="grid grid-cols-3 h-48 ml-24 mr-24">
            <div></div>
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="max-w-3xl mx-auto">
                    <div class="flex space-x-10 justify-center items-center mb-14 border-t border-gray-200 pt-10">

                        <a href="/" class="transition-transform duration-500 ease-in-out hover:scale-150">
                          <img src={Logo} class="h-12 w-12 transform transition-transform duration-500 ease-in-out hover:scale-150" />
                        </a>

                        <a href="https://www.autoscout24.ch/de/s/seller-67583" class="block text-gray-900 transition-all duration-500 ease-in-out hover:text-indigo-600">
                          <img src={AS_ICON} class="h-12 w-12 transform transition-transform duration-500 ease-in-out hover:scale-150" />
                        </a>

                        <a href="https://github.com/De27vin/zcar-website" class="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
                            <img src={GH_ICON} class="h-10 w-10 transform transition-transform duration-500 ease-in-out hover:scale-150" ></img>
                        </a>
                    </div>
                    <span class="text-lg text-gray-500 text-center block">©<a>Z-Car</a> 2024, Alle Rechte vorbehalten.</span>
                </div>
            </div>
        <div></div>
        </div>
        </Router>                       
    </footer>
    )
}