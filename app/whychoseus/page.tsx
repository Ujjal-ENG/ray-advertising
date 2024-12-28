import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import bgImg from '../../public/image/whychoseus.png';
const WhyChooseUs = () => {
  const benefits = [
    {
      title: "We're Independent",
      description: "We're not tied to any single insurer, ensuring unbiased recommendations."
    },
    {
      title: "Save Time & Money",
      description: "Our experts connect you to affordable plans that meet your needs quickly."
    },
    {
      title: "Coverage for Everyone",
      description: "Whether you're insured or uninsured, we have options for you."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      {/* Title Section */}
      <div className="mb-12">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-2">
          <span className="text-blue-500">Why Choose</span>
          <br />
          <span className="text-orange-500">AutoPolicyQuote?</span>
        </h2>
      </div>

<div className='flex justify-between align-middle'>
    {/* Benefits List */}
    <div className="space-y-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4">
            <FaCheckCircle className="text-blue-500 text-2xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-blue-500 text-xl font-bold mb-1">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* group image */}
      <Image src={bgImg} width={320} height={250} alt="why chose us group image"/>
</div>
  
    </div>
  );
};

export default WhyChooseUs;