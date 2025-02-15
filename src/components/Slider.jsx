import { useState } from "react"
import { After, Next } from "../icons"

const slides = [
  "http://i.ytimg.com/vi/DlNSH4OG_Vs/maxresdefault.jpg",
  "http://i.ytimg.com/vi/nYQ4f_frVk0/maxresdefault.jpg",
  "http://i.ytimg.com/vi/DlNSH4OG_Vs/maxresdefault.jpg",
]

export function Slider() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className="h-[500px] max-w-6xl mx-auto relative flex items-center justify-center p-4 space-x-10">

      <button
        onClick={goToPrevSlide}
        className="z-10 h-full px-3 group border border-white/40 hover:text-white  text-gray-400 transition-colors hover:border-white"
      >
        <After />
      </button>

      <div className="relative w-full h-full overflow-hidden rounded-lg border-2 shadow-sm shadow-white ">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={slide}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goToNextSlide}
        className="z-10 h-full px-3 group border border-white/40 hover:text-white  text-gray-400 transition-colors hover:border-white"
      >

        <Next />
      </button>
    </div>
  );
};