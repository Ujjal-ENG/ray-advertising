import React from 'react';
import { FaPiggyBank, FaFileInvoiceDollar, FaExchangeAlt, FaPhoneAlt } from 'react-icons/fa';
import bg from '../../public/image/benefits-bg.png';

const KeyBenefits = () => {
  const benefits = [
    {
      icon: FaPiggyBank,
      title: "Unlock Savings with Competitive Rates",
    },
    {
      icon: FaFileInvoiceDollar,
      title: "Custom Plans to Fit Your Lifestyle and Budget",
    },
    {
      icon: FaExchangeAlt,
      title: "Switching Made Easy– We Do the Work for You",
    },
  ];

  return (
    <div
    style={{ backgroundImage: "url(" + bg.src + ")" }}
  className="relative w-full  py-12 px-4  bg-no-repeat bg-cover bg-center overflow-hidden"
  >
      {/* Content container */}
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Key Benefits
        </h2>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <benefit.icon className="text-white text-5xl mb-4" />
              <p className="text-white font-bold text-lg  max-w-xs">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action button */}
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 flex items-center mx-auto">
            <span className="mr-2"><FaPhoneAlt /></span> Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;