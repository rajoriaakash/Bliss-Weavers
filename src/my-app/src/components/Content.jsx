import React from 'react'
import UpperSlide from './UpperSlides.jsx'
import AboutUs from './AboutUs.jsx'
import Youtube from './Youtube.jsx'
import Products from './Products.jsx'
function Content () {
  return (
    <div id="content">
         <UpperSlide />
      <Products />
      <Youtube />
      <AboutUs />
    </div>
  )
}

export default Content