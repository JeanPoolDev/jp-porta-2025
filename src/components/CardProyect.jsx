
export function ArtGallery() {
  return (   
   <div className="grid grid-cols-3 grid-rows-6 gap-2 w-full h-full">
     <div className="bg-gray-200 rounded-lg col-span-2 row-span-2 h-[500px] ">
      <img src="./fondo2.png" alt="" className="w-full h-full bg-cover rounded-lg" />
     </div>
     <div className="bg-gray-200 rounded-lg row-span-2 col-start-1 row-start-3">
      <img src="./fondo2.png" alt="" className="w-full h-full bg-cover rounded-lg" /> 
     </div>
     <div className="bg-gray-200 rounded-lg col-span-2 row-span-2 col-start-2 row-start-3 h-[500px]">
     <img src="./fondo2.png" alt="" className="w-full h-full bg-cover rounded-lg" />
     </div>
     <div className="bg-gray-200 rounded-lg row-span-2 col-start-1 row-start-5">
     <img src="./fondo2.png" alt="" className="w-full h-full bg-cover rounded-lg" />
     </div>
     <div className="bg-gray-200 rounded-lg row-span-2 col-start-3 row-start-1">
     <img src="./fondo2.png" alt="" className="w-full h-full bg-cover rounded-lg" />
     </div>
     <div className="bg-gray-200 rounded-lg row-start-5 h-[250px]">
     <img src="./fondo2.png" alt="" className="w-full h-full bg-cover rounded-lg" />

     </div>
     <div className="bg-gray-200 rounded-lg col-start-2 row-start-6 h-[250px]">     
      <img src="./fondo2.png" alt="" className="w-full h-full bg-cover rounded-lg" />
     </div>
     <div className="bg-gray-200 rounded-lg col-start-3 row-start-5 h-[250px]">
     <img src="./fondo2.png" alt="" className="w-full h-full bg-cover rounded-lg" />

     </div>
     <div className="bg-gray-200 rounded-lg col-start-3 row-start-6 h-[250px]">
     <img src="./fondo2.png" alt="" className="w-full h-full bg-cover rounded-lg" />
     </div>
   </div>
  );
}