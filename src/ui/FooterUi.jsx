export function FooterUi(){
 return (
  <>
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
  </>
 )
}