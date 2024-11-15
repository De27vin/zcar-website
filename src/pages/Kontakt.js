

export default function App() {




 
    return (      
      <>
 	<div class=" my-4 px-4 lg:px-20 flex-items-center">
    <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
      <div class="flex">
        <h1 class="font-bold text-5xl dark:text-white">Sende uns eine Nachricht</h1>
      </div>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
        <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Vorname*" />
        <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Nachname*" />
        <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email*" />
        <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="tel" placeholder="Telefonnummer*" />
        </div>
        <div class="my-4">
          <textarea placeholder="Nachricht*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div class="my-2 w-1/2 lg:w-1/4">
          <button class="uppercase text-sm font-bold tracking-wide bg-blue-800 hover:bg-blue-900 text-gray-100 p-3 w-full 
                      focus:outline-none focus:shadow-outline rounded-lg">
            Senden
          </button>
        </div>
  </div>
        </div>
        <div class="grid grid-cols-3">
        <div class="h-12 rounded-2xl shadow-2xl w-full h-96 p-10 ml-20 mt-20">
          <h1 class="font-bold text-4xl dark:text-white">Impressum</h1>
          <br/>  
            <p class="leading-loose text-xl text-gray-700 text-base dark:text-slate-300">
            Herr Hussein Zogheib<br/>
            Z-Car Automobile - Auto Ankauf & Verkauf<br/>
            Bassersdorferstrasse 117<br/>
            8302 Kloten
            </p>
        </div>
        </div>
        </>
      );
    }