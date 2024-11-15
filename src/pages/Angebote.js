import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.autoscout24.ch/MVC/Content/as24-hci-desktop/js/e.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  })

    return (
        <div class="mt-28">
          <div class="grid grid-cols-4 place-items-center">
              <div 
                data-embedded-src="https://www.autoscout24.ch/de/hci/list?design=4804&filter=10041" 
                class="embedded-content-area">
              </div>
          </div>
        </div>
      );
    }