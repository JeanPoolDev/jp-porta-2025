import { Github, Linkeding, YoutuBe } from "../icons"

const links = [
 { path: 'https://github.com/JeanPoolDev', icono: <Github /> },
 { path: 'https://www.linkedin.com/in/jean-pool-rojas-avila-70535b251/', icono: <Linkeding /> },
 { path: 'https://www.youtube.com/', icono: <YoutuBe/> },
]

export function HomeUi(){
 return (
  <>
   <header className="p-8 flex fixed justify-center sm:justify-between items-center w-full z-30 tracking-none sm:tracking-[.10em] text-white">
   
        <a className="hover:text-[#00FFFF]" href="#">
          <div className="hidden sm:block p-5 rounded-lg bg-black">
            JP  
          </div>
        </a>

      <div className="py-3 sm:py-5 px-10 rounded-lg shadow-lg bg-black">
        <nav className="flex gap-4 sm:gap-10 text-lg md:gap-15 items-center text-center">
          <a className="hover:text-[#00FFFF]" href="#">INICIO</a>
          <a className="hover:text-[#00FFFF]" href="#aboutme">SOBRE MI</a>
          <a className="hover:text-[#00FFFF]" href="#">PROYECTOS</a>
          <a className="hover:text-[#00FFFF]" href="#videos">VIDEOS</a>
        </nav>
      </div>
    </header>

    <div className=" h-[85%] flex justify-center 
    items-center flex-col text-center">
      <p className="text-2xl">──── 創造と革新 ────</p>
      <h1 className="text-9xl tracking-[.15em]">JEAN-POOL</h1>
      <p className="text-2xl sm:text-4xl tracking-[.30em]">
        DESIGNER WEB AND SOFTWARE
      </p>
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
  </>
 )
}