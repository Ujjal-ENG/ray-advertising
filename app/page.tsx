import React from 'react'
import Navbar from './navbar/page'

const home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <Navbar />
      <p>This is the default home page.</p>
      <button>Click me</button>
    </div>
  )
}

export default home;