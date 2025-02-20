
export function AboutmeUi(){
 return(
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
 )
}