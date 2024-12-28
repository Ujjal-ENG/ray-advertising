import React from 'react'
import Marquee from "react-fast-marquee";

import img1 from '../../public/image/highlighted/image1.png';
import img2 from '../../public/image/highlighted/image2.png';
import img3 from '../../public/image/highlighted/image3.png';
import img4 from '../../public/image/highlighted/image4.png';
import img5 from '../../public/image/highlighted/image5.png';
import Image from 'next/image';
const HighlightedArea = () => {
    const images = [
        img1, img2, img3, img4, img5
    ]
  return (
    <div>
        <h1 className='uppercase space-x-px text-4xl text-blue-600 mt-28 mb-6 text-center'>Highlighted on</h1>
        <Marquee pauseOnHover={true} speed={40}>
            {images.map((img, index) => (
                <div key={index} className='mx-20'>
                    <Image src={img} alt={`Image ${index + 1}`} />
                </div>
            ))}  {/* End of map function */}    
        </Marquee>
    </div>
  )
}

export default HighlightedArea;