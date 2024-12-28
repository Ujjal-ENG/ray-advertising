import React from 'react'
import bg from '../../public/image/header.png';
import QuestionCard from '../questions/page';

const Header = () => {
  return (
    <div
    style={{ backgroundImage: "url(" + bg.src + ")" }}
  className="relative w-full h-screen  bg-no-repeat bg-cover bg-center overflow-hidden"
  >
    {/* Background overlay with blur effect */}
    <div className="absolute inset-0 bg-black/50"></div>
      {/* Content container */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Main heading with responsive text sizes */}
        <h1 className="text-white max-w-4xl mx-auto">
          <span className="block text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Switch and Save Big on <span className="text-orange-500">Auto Insurance</span>
          </span>
          <span className="block text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Up to <span className="text-orange-500">$500</span> a Year!
          </span>
        </h1>
        
        {/* Subtext */}
        <p className="text-white text-lg md:text-xl max-w-2xl">
          Don&apos;t Overpay for Insurance. Answer a Few Quick Questions to Find Your Best Rate Today!
        </p>

        {/* Questions Container */}
         <QuestionCard />
      </div>
  </div>
  )
}

export default Header;