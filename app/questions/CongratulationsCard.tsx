import React from 'react'

const CongratulationsCard = () => {
  return (
    <div className="rounded-lg bg-slate-900/70 p-8 shadow-xl text-center">
    <h2 className="text-3xl font-bold text-orange-500 mb-4">
      Congratulations!
    </h2>
    <p className="text-white text-xl mb-6">
      You May Be Eligible to Enroll in a Heavily Discounted Insurance Plan &
    </p>
    <p className="text-white text-lg mb-8">
      Click The Number Below To Call And Secure Your Deal.
    </p>
    <a 
      href="tel:+18555551094"
      className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white text-xl font-bold rounded-md hover:bg-orange-600 transition-colors"
    >
      📞 (855) 555-1094
    </a>
  </div>
  )
}

export default CongratulationsCard