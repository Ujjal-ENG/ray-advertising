import React from 'react'

const Partners = () => {
    const partners = [
        "TRAVELERS",
        "PROGRESSIVE",
        "HARTFORD",
        "GEICO",
        "STATE FARM"
      ];

  return (
    <div className="w-full bg-orange-500 py-4 rounded-lg">
      <p className="text-white text-sm font-semibold mb-3 text-center">
        OUR PARTNERS
      </p>  
      <marquee scrollamount="5" className="flex whitespace-nowrap">
        {partners.map((partner, index) => (
          <div 
            key={index}
            className="h-8 w-30 bg-white/90 rounded inline-flex items-center justify-center mx-20"
          >
            <span className="text-orange-500 font-bold text-sm px-4">{partner}</span>
          </div>
        ))}
      </marquee>
    </div>
  )
}

export default Partners;