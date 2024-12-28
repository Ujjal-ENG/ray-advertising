import React from 'react'
import Navbar from './navbar/page'
import Header from './header/page'
import HowItWorks from './howitworks/page'
import KeyBenefits from './benefits/page'
import WhyChooseUs from './whychoseus/page'
import CTABanner from './calling/page'

const home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HowItWorks />
      <KeyBenefits />
      <WhyChooseUs/>
      <CTABanner />
    </div>
  )
}

export default home;