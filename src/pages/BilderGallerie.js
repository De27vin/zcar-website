import { useEffect } from "react";
import Mercedes_benz_500_se from "../assets/images/cars/mercedes-benz-500-se.png"
import Porsche_Cayman_S from "../assets/images/cars/IMG-20250115-WA0002.jpg"
import BMW_116i from "../assets/images/cars/IMG-20250115-WA0006.jpg"
import MINI_Mini_Cooper_S from "../assets/images/cars/IMG-20250115-WA0008.jpg"
import Land_Rover_Range_Rover_Evoque from "../assets/images/cars/IMG-20250115-WA0011.jpg"
import Renault_Mégane from "../assets/images/cars/IMG-20250115-WA0013.jpg"
import BMW_118i from "../assets/images/cars/IMG-20250115-WA0015.jpg"
import BMW_X1 from "../assets/images/cars/IMG-20250115-WA0018.jpg"
import VW_Tiguan from "../assets/images/cars/IMG-20250115-WA0019.jpg"

export default function App() {

    return (
<>
<div className="flex flex-col items-center mx-auto space-y-6">
  {/* Überschrift */}
  <p className="text-5xl font-bold">Bestseller</p>
  
  {/* Best offer single car */}
  <div className="w-2/3 relative group">
    <img className="w-full rounded-xl" src={Mercedes_benz_500_se} alt="Mercedes-Benz 500 SE" />

    {/* Hovering with information */}
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-white text-lg font-semibold text-center">
        Mercedes-Benz<br />
        500 SE<br /><br />
        <a className="underline">CHF 7'870.-</a>
      </p>
    </div>
  </div>
</div>

<br/>

        {/* Picture grid */}
        <div className="grid grid-cols-3 w-2/3 mx-auto items-center gap-5">
            {/* First row */}
            {/* Element 1 */}
            <div className="relative group w-96 h-56 overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover" src={Porsche_Cayman_S}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">Porsche<br/>Cayman S<br /><br /><a className="underline">CHF 15'030.-</a></p>
                </div>

            </div>

            {/* Element 2 */}
            <div className="relative group w-96 h-56 overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover" src={BMW_116i}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">BMW<br/>116i Sport Line Steptronic<br /><br /><a className="underline">CHF 11'870.-</a></p>
                </div>

            </div>

            {/* Element 3 */}
            <div className="relative group w-96 h-56 overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover" src={MINI_Mini_Cooper_S}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">MINI<br/>Mini Cooper S<br /><br /><a className="underline">CHF 8'870.–</a></p>
                </div>

            </div>

            {/* Second row */}
            {/* Element 1 */}
            <div className="relative group w-96 h-56 overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover" src={Land_Rover_Range_Rover_Evoque}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">Land Rover<br/>Range Rover Evoque<br /><br /><a className="underline">CHF 16'780.–</a></p>
                </div>

            </div>

            {/* Element 2 */}
            <div className="relative group w-96 h-56 overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover" src={Renault_Mégane}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">Renault<br/>Mégane<br /><br /><a className="underline">CHF 15'870.–</a></p>
                </div>

            </div>

            {/* Element 3 */}
            <div className="relative group w-96 h-56 overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover" src={BMW_118i}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">BMW<br/>118i<br /><br /><a className="underline">CHF 13'375.–</a></p>
                </div>

            </div>

            {/* Third row */}
            {/* Element 1 */}
            <div className="relative group w-96 h-56 overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover" src={BMW_X1}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">BMW<br/>X1 xDrive 18d Sport Line Steptronic<br /><br /><a className="underline">CHF 18'770.–</a></p>
                </div>

            </div>

            {/* Element 2 */}
            <div className="relative group w-96 h-56 overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover" src={VW_Tiguan}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">VW<br/>Tiguan 2.0 TDI SCR Sound 4Motion DSG<br /><br /><a className="underline">CHF 29'890.–</a></p>
                </div>

            </div>

            {/* Element 3 */}
            <div className="relative group w-96 h-56 overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover" src={Mercedes_benz_500_se}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">Mercedes-Benz<br/>500 SE<br /><br /><a className="underline">CHF 7'870.–</a></p>
                </div>

            </div>
        </div>
        </>
    )
}