

export function Portafolio() {
  return (
    <main className="h-auto">

      <section className="h-screen bg-amber-200">

        <header className="p-8 flex fixed justify-center sm:justify-between items-center w-full">
          <div className="hidden sm:block bg-amber-100 py-4 px-6 rounded-xl">
            Logo
          </div>

          <div className="bg-amber-100 p-4 rounded-xl">
            <nav className="flex gap-8 md:gap-10">
              <a href="#">Inicio</a>
              <a href="#">Sobre mi</a>
              <a href="#">Proyectos</a>
              <a href="#">Videos</a>
            </nav>
          </div>
        </header>

        <div className=" h-[85%] flex justify-center 
        items-center flex-col text-center">
          <p className="text-2xl">──── 創造と革新 ────</p>
          <h1 className="text-9xl">JEAN-POOL</h1>
          <p className="text-2xl tracking-[.40em]">DESIGNER WEB AND SOFTWARE</p>
        </div>

        <div className=" h-[15%] px-8">

          <nav className="flex justify-center md:justify-end gap-4">
            <a
              href="#"
              className="px-8 md:px-10 py-4  bg-amber-100">
              Github
            </a>
            <a
              href="#"
              className="px-8 md:px-10 py-4  bg-amber-100">
              Linkedin
            </a>
            <a
              href="#"
              className="px-8 md:px-10 py-4  bg-amber-100">
              Youtube
            </a>
          </nav>

        </div>


      </section>

    </main>
  );
};