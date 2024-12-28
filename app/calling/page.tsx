import Image from 'next/image';
import bg from '../../public/image/agentcalling.png';
import callGirl from '../../public/image/callgirl.png';
import {FaPhoneAlt} from 'react-icons/fa'

const CTABanner = () => {
    return (
        <div
        style={{ backgroundImage: "url(" + bg.src + ")" }}
      className="relative w-full bg-no-repeat bg-cover bg-center mt-28"
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
  
        {/* Content container */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 py-8 flex items-center justify-between">
          {/* Text content */}
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-2">
              Looking For Help? Speak To A
              <span className="block text-orange-500">Licensed Insurance Agent</span>
            </h2>
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2 transition-colors">
              <span><FaPhoneAlt/></span>
              Call Now
            </button>
          </div>
  
          {/* Circular image */}
          <div className="absolute">
            <div className="w-full rounded-full bg-orange-500 ml-[190%]">
              <Image 
                src={callGirl}
                alt="Insurance Agent"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CTABanner;