import React from 'react'
import Image from 'next/image';
import { FaPhoneAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
        <div className="bg-[#011733] flex items-center justify-between px-6 py-4">

  <div className="flex items-center space-x-2">
    <Image src="/image/logo.png" alt="logo-png" className="h-15" width={154} height={80}/>
  </div>
 
  <div className="flex flex-col space-y-2 items-center space-x-6 text-white text-sm">
    <p>
    <span>
      Rates as low as
      <span className="text-blue-300 font-bold">$34/month</span>
    </span>
    </p>
    <div className="flex items-center space-x-1">
  
  <FaPhoneAlt />
      <span>(855) 555-1094</span>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar;