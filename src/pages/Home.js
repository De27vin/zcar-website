

export default function App() {





    return (
      <>
      {/* 1. Column with grid */}
      <div class="grid grid-cols-3 m-15">
        <div></div>

        <div className="video-home-page">
          <video class="flex justify-center" controls>
            <source src="/video/video-bmw-m4.mp4" type="video/mp4"/>
          </video>  
        </div>
        </div>

        {/* 2. Column with grid */}
        <div class="grid grid-cols-3 m-15">
          <div/>
          <h1 class="flex justify-center" >Unser Standort</h1>
        </div>

        {/* 3. Column with grid */}
        <div class="grid grid-cols-3 m-15">
          <div></div>

          <div class="flex justify-center">
            <iframe className="location-google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1633.5759552906436!2d8.596094360471284!3d47.45025472083464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a9f8de213ef9d%3A0x1957b6eda0ad69f!2sBassersdorferstrasse%20111%2C%208302%20Kloten!5e1!3m2!1sde!2sch!4v1725301551324!5m2!1sde!2sch" title="Location of Z-Car on Google Maps" width="640" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div class="grid grid-cols-3 m-15">
          <div></div>
        <div class="h-12 rounded-2xl shadow-2xl w-full h-lvh p-10">
        <div class="flex flex-col justify-content-center">
        <div><h1 class="font-bold text-5xl dark:text-white">Was unsere Kunden sagen</h1></div>  
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt=""/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
</div>
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt=""/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
</div>
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt=""/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
</div>
</div>
        </div>
        <div></div>
        </div>
        


        </>
      );
    }