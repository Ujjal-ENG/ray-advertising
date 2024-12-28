import React from 'react'
import Navbar from './navbar/page'
import Header from './header/page'
import HowItWorks from './howitworks/page'
import KeyBenefits from './benefits/page'
import WhyChooseUs from './whychoseus/page'
import CTABanner from './calling/page'
import Disclaimer from './disclaimer/page'
import HighlightedArea from './highlightedarea/page'

const home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HowItWorks />
      <KeyBenefits />
      <WhyChooseUs/>
      <CTABanner />
      <Disclaimer />
      <HighlightedArea/>
    </div>
  )
}

export default home;