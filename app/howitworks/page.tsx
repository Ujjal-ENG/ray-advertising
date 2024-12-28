import { FaShareAlt , FaUsers , FaPiggyBank  } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: FaShareAlt ,
      title: "Share Your Info",
      description: "Provide a few details about yourself and your vehicle.",
    },
    {
      icon: FaUsers,
      title: "Get Tailored Options",
      description: "Receive personalized recommendations from our trusted agents.",
    },
    {
      icon: FaPiggyBank,
      title: "Start Saving",
      description: "Compare and select the best option for your needs.",
    },
  ];

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-500 mb-2">How It Works</h2>
        <p className="text-gray-600">See How Much You Can Save in 3 Simple Steps</p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-2xl" 
          >
            {/* Icon */}
            <div className="flex justify-center mb-4  transform transition-all duration-500 hover:scale-125" >
              <step.icon className="w-12 h-12 text-blue-500" />
            </div>

            {/* Content */}
            <div className="text-center  transform transition-all duration-500 hover:scale-125">
              <h3 className="text-xl font-bold text-blue-500 mb-2 ">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;