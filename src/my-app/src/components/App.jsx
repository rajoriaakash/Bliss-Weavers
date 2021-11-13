import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import UpperSlide from './UpperSlides.jsx'
import AboutUs from './AboutUs.jsx'
import Youtube from './Youtube.jsx'
import Products from './Products.jsx'
function App () {
  return (
    <div id="home-section">
      <Header />
      <UpperSlide />
      <Products />
      <Youtube />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default App
