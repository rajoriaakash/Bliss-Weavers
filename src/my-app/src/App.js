import React from 'react'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Content from './components/Content.js'
import Store from './components/Store.js'
import Product from './SingleProduct.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { category } from './components/Products'
// import { SignIn } from './firebase/utils/signIn'

function App () {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <div id='home-section'>
              <Header />
              <Content />
              <Footer />
            </div>
          }
        />
        {/* <Route path='/signIn' element={<SignIn></SignIn>}></Route> */}
        <Route path='/product' exact element={<Store />} />
        <Route
          exact path='singleproduct/:listing_id'
          render={(props) => {
            <Product {...this.props}  />
          }}
        />
        <Route>404 error page</Route>
      </Routes>
    </Router>
  )
}

export default App
