import React from 'react'
import Image from 'next/image';
const Navbar = () => {
  return (
    <div>
        <div className="bg-[#011733] flex items-center justify-between px-4 py-4">

  <div className="flex items-center space-x-2">
    <Image src="/image/logo.png" alt="logo-png" className="h-10" width={154} height={80}/>
  </div>
 
  <div className="flex flex-column items-center space-x-6 text-white text-sm">
    <span>
      Rates as low as
      <span className="text-blue-300 font-bold">$34/month</span>
    </span>
    <div className="flex items-center space-x-1">
    
      <span>(855) 555-1094</span>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar;