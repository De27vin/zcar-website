import { useEffect } from "react";
import Mercedes_benz_500_se from "../assets/images/cars/mercedes-benz-500-se.png"

export default function App() {

    return (
        <>
        <div className="grid grid-cols-3 w-2/3 mx-auto items-center gap-5">
            {/* First row */}
            {/* Element 1 */}
            <div className="relative group">
                <img className="w-full rounded-xl" src={Mercedes_benz_500_se}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">Mercedes-Benz<br/>500 SE<br /><br /><a className="underline">CHF 7'870.–</a></p>
                </div>

            </div>

            {/* Element 2 */}
            <div className="relative group">
                <img className="w-full rounded-xl" src={Mercedes_benz_500_se}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">Mercedes-Benz<br/>500 SE<br /><br /><a className="underline">CHF 7'870.–</a></p>
                </div>

            </div>

            {/* Element 3 */}
            <div className="relative group">
                <img className="w-full rounded-xl" src={Mercedes_benz_500_se}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">Mercedes-Benz<br/>500 SE<br /><br /><a className="underline">CHF 7'870.–</a></p>
                </div>

            </div>

            {/* Second row */}
            {/* Element 1 */}
            <div className="relative group">
                <img className="w-full rounded-xl" src={Mercedes_benz_500_se}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">Mercedes-Benz<br/>500 SE<br /><br /><a className="underline">CHF 7'870.–</a></p>
                </div>

            </div>

            {/* Element 2 */}
            <div className="relative group">
                <img className="w-full rounded-xl" src={Mercedes_benz_500_se}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">Mercedes-Benz<br/>500 SE<br /><br /><a className="underline">CHF 7'870.–</a></p>
                </div>

            </div>

            {/* Element 3 */}
            <div className="relative group">
                <img className="w-full rounded-xl" src={Mercedes_benz_500_se}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">Mercedes-Benz<br/>500 SE<br /><br /><a className="underline">CHF 7'870.–</a></p>
                </div>

            </div>

            {/* Third row */}
            {/* Element 1 */}
            <div className="relative group">
                <img className="w-full rounded-xl" src={Mercedes_benz_500_se}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">Mercedes-Benz<br/>500 SE<br /><br /><a className="underline">CHF 7'870.–</a></p>
                </div>

            </div>

            {/* Element 2 */}
            <div className="relative group">
                <img className="w-full rounded-xl" src={Mercedes_benz_500_se}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">Mercedes-Benz<br/>500 SE<br /><br /><a className="underline">CHF 7'870.–</a></p>
                </div>

            </div>

            {/* Element 3 */}
            <div className="relative group">
                <img className="w-full rounded-xl" src={Mercedes_benz_500_se}/>

                {/* Hovering with information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center">Mercedes-Benz<br/>500 SE<br /><br /><a className="underline">CHF 7'870.–</a></p>
                </div>

            </div>
        </div>
        </>
    )
}