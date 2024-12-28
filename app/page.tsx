import React from 'react'
import Navbar from './navbar/page'
import Header from './header/page'
import HowItWorks from './howitworks/page'
import KeyBenefits from './benefits/page'
import WhyChooseUs from './whychoseus/page'

const home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HowItWorks />
      <KeyBenefits />
      <WhyChooseUs/>
    </div>
  )
}

export default home;