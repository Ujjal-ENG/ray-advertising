const QuestionCard = () => {
    return (
      <div className="max-w-2xl my-10 mx-auto p-6 rounded-lg bg-slate-900/70 shadow-xl">
        {/* Question text */}
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Are you currently insured?
        </h2>
        
        {/* Buttons container */}
        <div className="flex justify-center gap-4">
          <button 
            className="px-8 py-3 text-lg font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
          >
            Yes
          </button>
          <button 
            className="px-8 py-3 text-lg font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
          >
            No
          </button>
        </div>
      </div>
    );
  };
  
  export default QuestionCard;