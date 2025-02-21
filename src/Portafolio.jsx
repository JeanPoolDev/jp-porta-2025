import { Slider } from "./components/Slider";
import { AboutmeUi } from "./ui/AboutmeUi";
import { FooterUi } from "./ui/FooterUi";
import { HomeUi } from "./ui/HomeUi";

export function Portafolio() {

  return (
    <main className="h-auto">
      <section className="h-screen  
      bg-[url('/fondoHome.jpg')] bg-cover" id="inicio">
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

      <section className="w-full h-auto fondo " id="aboutme">
        <AboutmeUi />
      </section>

      <section className="h-screen w-full bg-gray-300 flex">
        
        <div className="w-1/2 h-full">

          <div className="text-white h-1/6 py-10 px-24">
            <h2 className="text-4xl mb-2">
              PROYECTOS
            </h2>
            <span className="text-sm bg-white text-black tracking-[.40em]">
              PROJECTS
            </span>
          </div>

          <div className="h-5/6 py-5 px-24">
            <div className="text-6xl sm:text-5xl my-10 font-light w-auto sm:w-[480px] tracking-[.15em]">
              <h1>ANIME SEARCH APP</h1>
            </div>

            <article className="text-xl space-y-5 font-light w-auto sm:w-[480px] mb-5">
              <p className="tracking-[.10em]">
                Desarrollé una aplicación web en React que permite buscar animes a través de una API externa. Utilicé Tailwind CSS para una interfaz atractiva y responsiva.            
              </p>
            </article>

            <div class="flex gap-2 items-center mb-5">
              <span class="rounded-lg py-1 px-2 bg-[#61DAFB] border-2">React</span>
              <span class="rounded-lg py-1 px-2 bg-[#FFFF00] border-2">Javacript</span>
              <span class="rounded-lg py-1 px-2 bg-[#3178C6] border-2">
                tailwindcss
              </span>
              <span class="rounded-lg py-1 px-2 bg-[#264DE4] border-2">
                Api
              </span>
            </div>

            <div className="flex text-white font-semibold">
              <a 
                href="#" 
                className="px-[75px] sm:px-[100px] py-[20px] border hover:opacity-70 ease-in-out hover:bg-[#00FFFF]/20 hover:text-[#00FFFF]">
                IR AL PROYECTO
              </a>
            </div>
          </div>


        </div>
        <div className="w-1/2 border">

        </div>
      </section>

      <section className="h-auto bg-black flex flex-col sm:flex-row px-20 text-white py-10 gap-5 sm:gap-0.5">
        <FooterUi />
      </section>

    </main>
  );
};