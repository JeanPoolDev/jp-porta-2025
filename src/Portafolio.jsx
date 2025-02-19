import { Slider } from "./components/Slider";
import { Linkeding, YoutuBe, Github } from "./icons";

const links = [
  { path: 'https://github.com/JeanPoolDev', icono: <Github /> },
  { path: 'https://www.linkedin.com/in/jean-pool-rojas-avila-70535b251/', icono: <Linkeding /> },
  { path: 'https://www.youtube.com/', icono: <YoutuBe/> },
]

export function Portafolio() {

  return (
    <main className="h-auto">
      <section className="h-screen bg-black 
      bg-[url('/fondoHome.jpg')] bg-cover" id="inicio">

        <header className="p-8 flex fixed justify-center sm:justify-between items-center w-full z-30 tracking-none sm:tracking-[.10em] text-white">

            <a className="hover:text-[#00FFFF]" href="#">
              <div className="hidden sm:block p-5 rounded-lg bg-black">
                JP  
              </div>
            </a>

          <div className="py-3 sm:py-5 px-10 rounded-lg shadow-lg bg-black  ">
            <nav className="flex gap-4 sm:gap-10 text-lg md:gap-15 items-center text-center">
              <a className="hover:text-[#00FFFF]" href="#">INICIO</a>
              <a className="hover:text-[#00FFFF]" href="#aboutme">SOBRE MI</a>
              <a className="hover:text-[#00FFFF]" href="#">PROYECTOS</a>
              <a className="hover:text-[#00FFFF]" href="#videos">VIDEOS</a>
            </nav>
          </div>
        </header>

        <div className=" h-[85%] flex justify-center 
        items-center flex-col text-center  lg:text-white">
          <p className="text-2xl text-center">──── 創造と革新 ────</p>
          <h1 className="text-9xl tracking-[.15em]">JEAN-POOL</h1>
          <p className="text-2xl sm:text-4xl tracking-[.30em]">DESIGNER WEB AND SOFTWARE</p>
        </div>

        <div className=" h-[15%] px-8">

          <nav className="flex justify-center md:justify-end gap-4">
            {
              links.map(link => (
                <a
                  target="_blank"
                  key={link.path}
                  href={link.path}
                  className={`px-6 sm:px-8 md:px-18 py-4 bg-black hover:opacity-75 ease-in-out`}>
                  {link.icono}
                </a>
              ))
            }
          </nav>

        </div>


      </section>

      <section className="h-auto bg-black p-8 space-y-10" id="videos">


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

        <div className="px-3 lg:px-0 mx-auto py-15 h-full w-full sm:w-1/2 grid place-content-center">

          <div >
            <h2 className="text-4xl mb-2" >INTRODUCCIÓN</h2>
            <span className="text-sm bg-black text-white tracking-[.20em]">
              INTRODUCTION
            </span>
          </div>

          <div className="text-6xl sm:text-7xl my-10 font-light w-auto sm:w-[480px] tracking-[.15em]">
            <h1>Hola soy JP, ¡Encantado de Conocerte!</h1>
          </div>

          <article className="text-2xl space-y-5 
          font-light w-auto sm:w-[480px] mb-10">

            <p className="tracking-[.10em]"> Profesional con más de 1 año de experiencia en el diseño y desarrollo de aplicaciones web.</p>

            <p className="tracking-[.10em]"> Especializado en diseño de interfaces (UI/UX) y con dominio de tecnologías modernas como JavaScript, React, TypeScript, CSS y otras herramientas del ecosistema frontend. </p>

            <p className="tracking-[.10em]">
            Comprometido con la creación de soluciones escalables, eficientes y centradas en el usuario, aplicando estas habilidades para mejorar procesos y herramientas en el ámbito de recursos humanos. 
            </p>

            <span className="text-2xl text-white bg-black w-auto">
              @jeanpooldev
            </span>
          </article>

          <div className="flex gap-6 text-white font-semibold">
            <a
              download='CVJeanPoolDesarrollodeSoftware2025'
              href="/pdf/CVJeanPoolDesarrollodeSoftware2025.pdf"
              className="px-[75px] sm:px-[100px] py-[20px] bg-black border  hover:opacity-70 ease-in-out">
              CV
            </a>
          </div>


        </div>


      </section>

      <section className="h-auto bg-[#121212] flex flex-col sm:flex-row px-20 text-white py-10 gap-5 sm:gap-0.5">

        <div className="w-full sm:w-1/2 flex items-center justify-center">
          <a
            href="#"
            className="text-lg sm:text-xl tracking-[.20em] underline">
            Portafolio Web | Jp-dev
          </a>
        </div>

        <nav className="w-full sm:w-1/2 flex 
        text-lg sm:text-xl tracking-[.20em]">

          <ul className="w-1/2 grid place-content-center list-disc">
            <li><a href="#" className="hover:underline">Proyectos</a></li>
            <li><a href="#aboutme" className="hover:underline">Sobre mi</a></li>
          </ul>

          <ul className="w-1/2 grid place-content-center list-disc">
            <li><a href="#" className="hover:underline">Github</a></li>
            <li><a href="#" className="hover:underline">Linkedin</a></li>
            <li><a href="#" className="hover:underline">Youtube</a></li>
          </ul>

        </nav>

      </section>

    </main>
  );
};