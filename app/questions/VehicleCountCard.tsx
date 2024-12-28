import React from 'react'

const VehicleCountCard: React.FC<{ onAnswer: (count: string) => void }> = ({ onAnswer }) => {
  return (
    <div className="rounded-lg bg-slate-900/70 p-8 shadow-xl">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
      How many vehicles do you have?
    </h2>
    <div className="flex justify-center gap-4">
      {['1', '2', '3+'].map((count) => (
        <button 
          key={count}
          onClick={() => onAnswer(count)}
          className="px-8 py-3 text-lg font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
        >
          {count}
        </button>
      ))}
    </div>
  </div>
  )
}

export default VehicleCountCard