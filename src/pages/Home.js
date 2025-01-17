import { motion } from 'framer-motion';
import video from '../assets/videos/video-bmw-m4.mp4';
import Check from "../assets/images/check.svg"

const cards = [
  {
      name: 'Christmann P.',
      rating: 5,
      review: 'Sympathisch und Freundliche Herr J.Zog Empfehlung 100% ..',
  },
  {
      name: 'Pascal H.',
      rating: 5,
      review: 'Alles Bestens mega nett.',
  },
  {
      name: 'Roland K.',
      rating: 5,
      review: 'Gutes Preis-Leistungs-Verhätnis',
  },
  {
      name: 'Roman H.',
      rating: 5,
      review: 'Sehr freundlich, hilfsbereit und effizient',
  },
  {
      name: 'Ulf J.',
      rating: 5,
      review: 'Kundenbetreuung 1A.',
  }, 
  {
      name: 'Jacqueline S.',
      rating: 4,
      review: 'Super Service',
  },
  {
    name: 'Andreas A.',
    rating: 4,
    review: 'Rasch und unkompliziert, gerne wieder.',
  },
  {
    name: 'Maria N.',
    rating: 5,
    review: 'Zuverlässig und treu gegenüber den Kunden',
  },
  { 
    name: 'Kevin K.',
    rating: 5,
    review: 'Schon mehrmals hier gekauft, und immer zu fairen Preisen.',
  }
];

export default function App() {
  const duplicatedCards = [...cards, ...cards];

  return (
    <>
      <div className="grid grid-cols-1 m-15 place-items-center">
        {/* 1. Column of grid */}
        <div className="h-full w-full fist-column-grid-home">
          <video autoPlay muted loop className="flex justify-center">
            <source src={video} type="video/mp4" />
          </video>
        </div>

        {/* 2. Column of grid */}
        <div className="flex justify-center h-full w-full mb-5 mt-5">
          <p className="flex justify-center text-4xl font-bold dark:text-gray-300">Wo Sie uns finden</p>
        </div>

        {/* 3. Column of grid */}
        <div className="flex justify-center h-full w-full">
          <iframe
            className="rounded-lg location-google-maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1633.5759552906436!2d8.596094360471284!3d47.45025472083464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a9f8de213ef9d%3A0x1957b6eda0ad69f!2sBassersdorferstrasse%20111%2C%208302%20Kloten!5e1!3m2!1sde!2sch!4v1725301551324!5m2!1sde!2sch"
            title="Location of Z-Car on Google Maps"
            width="640"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="w-96 h-1 mx-auto my-4 bg-gray-700 border-0 rounded md:my-10 dark:bg-gray-500"></hr>

      <div className="grid grid-cols-1 mt-20">
        <div className="h-12 rounded-2xl shadow-2xl w-full h-96 p-10">
          <div>
            <h1 className="font-bold text-5xl dark:text-white mb-10">Was unsere Kunden sagen</h1>
          </div>

          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 15, 
                repeat: Infinity,
              }}
            >
              {duplicatedCards.map((card, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 p-4 w-1/5" 
                >
                  <div className="max-w-sm rounded overflow-hidden shadow-lg h-48">
                    <div className="px-6 py-4 w-full">
                      <div className="font-bold text-xl mb-2">{card.name}</div>
                      <div className="flex items-center mt-4 mb-4">
                        {Array(card.rating).fill(0).map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-300 mr-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        ))}
                        <p className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400">{card.rating}</p>
                        <p className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400">von</p>
                        <p className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
                      </div>
                      <p className="text-gray-700 text-base dark:text-slate-300">
                        "{card.review}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-20 place-items-center">
        <div className="rounded-2xl shadow-2xl w-full h-96 p-10">
          <div>
            <h1 className="font-bold text-4xl dark:text-white mb-10">Ihre Vorteile bei Z-Car</h1>
          </div>
          <div className="flex items-center gap-4">
            <img className="h-6" src={Check} alt="Check" />
            <p className="font-semibold text-lg dark:text-gray-300">Gratis Probefahrt</p>
          </div>

          <br/>

          <div className="flex items-center gap-4">
            <img className="h-6" src={Check} alt="Check" />
            <p className="font-semibold text-lg dark:text-gray-300">Frischer MFK für jedes Fahrzeug</p>
          </div>

          <br/>

          <div className="flex items-center gap-4">
            <img className="h-6" src={Check} alt="Check" />
            <p className="font-semibold text-lg dark:text-gray-300">Fahrzeug Besichtigung jederzeit</p>
          </div>
        </div>
      </div>
    </>
  );
}
