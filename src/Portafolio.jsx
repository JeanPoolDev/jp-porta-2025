
const links = [
  {name: 'Github', path: '#'},
  {name: 'Linkedin', path: '#'},
  {name: 'Youtube', path: '#'},
]

export function Portafolio() {
    
  return (
    <main className="h-auto">

      <section className="h-screen bg-gray-500/50 bg-[url('/fondo.png')]">

        <header className="p-8 flex fixed justify-center sm:justify-between items-center w-full">
          <div className="hidden sm:block py-4 px-6 rounded-xl bg-white/30 border border-white/10 backdrop-blur-md shadow-lg">
            Logo
          </div>

          <div className="bg-white/30 border-white/10 border p-4 rounded-xl shadow-lg backdrop-blur-md">
            <nav className="flex gap-8 md:gap-15">
              <a href="#">Inicio</a>
              <a href="#">Sobre mi</a>
              <a href="#">Proyectos</a>
              <a href="#">Videos</a>
            </nav>
          </div>
        </header>

        <div className=" h-[85%] flex justify-center 
        items-center flex-col text-center ">
          <p className="text-2x">──── 創造と革新 ────</p>
          <h1 className="text-9xl">JEAN-POOL</h1>
          <p className="text-2xl tracking-[.40em]">DESIGNER WEB AND SOFTWARE</p>
        </div>

        <div className=" h-[15%] px-8">

          <nav className="flex justify-center md:justify-end gap-4">
            {
              links.map(link => (
                <a
                  key={link.name}
                  href={link.path}
                  className="px-8 md:px-10 py-4 bg-white/30 backdrop-blur-md shadow-lg border-white/10 border">
                  { link.name }
                </a>
              ))
            }
          </nav>

        </div>


      </section>

      <section className="h-screen">
            
      

      </section>

    </main>
  );
};