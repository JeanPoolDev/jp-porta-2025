import {ArtGallery} from "./components/CardProyect";
import { Slider } from "./components/Slider";
import { AboutmeUi } from "./ui/AboutmeUi";
import { FooterUi } from "./ui/FooterUi";
import { HomeUi } from "./ui/HomeUi";

export function Portafolio() {

  return (
    <main className="h-auto">
      <section className="h-screen  
      bg-[#FAFAFA]" id="inicio">
        <HomeUi />
      </section>

      <section className="h-auto bg-black px-24 py-10 space-y-10" id="videos">
        <div >
          <h2 className="text-3xl mb-2 text-white" >
            NO TE OLVIDES DE SEGUIRME EN YOUTUBE
          </h2>
          <span className="text-sm bg-white font-semibold  tracking-[.20em]">
          DON'T FORGET TO FOLLOW ME ON YOUTUBE
          </span>
        </div>
        <Slider />
      </section>

      <section className="w-full h-auto fondo" id="aboutme">
        <AboutmeUi />
      </section>

      <section className="w-full h-auto bg-black py-10 px-24">
        
        <div className="text-white mb-10">
          <h2 className="text-4xl mb-2">
            PROYECTOS
          </h2>
          <span className="text-sm bg-white text-black tracking-[.40em]">
            PROJECTS
          </span>
        </div>

        <div>
          <ArtGallery />
        </div>

        
      </section>

      <section className="h-auto bg-black flex flex-col sm:flex-row px-20 text-white py-10 gap-5 sm:gap-0.5">
        <FooterUi />
      </section>

    </main>
  );
};