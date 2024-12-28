import React from 'react'

const InsuranceStatusCard: React.FC<{ onAnswer: (answer: string) => void }> = ({ onAnswer }) => {
  return (
    <div className="rounded-lg bg-slate-900/70 p-8 shadow-xl">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
        Are you currently insured?
      </h2>
      <div className="flex justify-center gap-4">
        <button 
          onClick={() => onAnswer('yes')}
          className="px-8 py-3 text-lg font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
        >
          Yes
        </button>
        <button 
          onClick={() => onAnswer('no')}
          className="px-8 py-3 text-lg font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
        >
          No
        </button>
      </div>
    </div>
  )
}

export default InsuranceStatusCard;