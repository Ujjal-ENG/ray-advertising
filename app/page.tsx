import React from 'react'
import Navbar from './navbar/page'
import Header from './header/page'
import HowItWorks from './howitworks/page'
import KeyBenefits from './benefits/page'

const home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HowItWorks />
      <KeyBenefits />
    </div>
  )
}

export default home;