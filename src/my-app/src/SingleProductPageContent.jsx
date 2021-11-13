import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import products from './SingleProductPageMatter'
let quantity = 1
function SingleProductPageContent () {
  const [quantity, setQuantity] = useState(1)
  function increase () {
    setQuantity(quantity + 1)
  }
  function decrease () {
    setQuantity(quantity - 1)
  }
  return (
    <div>
      <Header />
      <div className='product-div'>
        <p>
          <img
            src={products[0].img}
            alt='HandBag'
            style={{
              width: '300px',
              height: '300px',
              marginRight: '15px',
              float: 'left'
            }}
          />
          <div>
            <h3>{products[0].name}</h3>
            {products[0].description}
            <div style={{ paddingTop: '2%' }}>
              <h3 style={{ display: 'inline', width: '50%' }}>Price:</h3>
              <span className='price-div'> {products[0].price}/-</span>
            </div>
            <h3>Quantity:</h3>
            
            <button
              type='button'
              onClick={decrease}
              class='btn btn-outline-success'
              style={{ marginRight: '3%' }}
            >
              -
            </button>
            <span style={{fontSize:'1.5rem'}}>{quantity}</span>
            <button
              type='button'
              onClick={increase}
              class='btn btn-outline-success'
              style={{ marginLeft: '3%' }}
            >
              +
            </button>
            <button
              style={{ display: 'block', marginTop: '3%' ,marginLeft:'33%'}}
              type='button'
              class='btn btn-secondary btn-lg'
            >
              Buy Now
            </button>
          </div>
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default SingleProductPageContent
