import React from 'react'
import Card from './Card'
import HOMEDECOR from '../images/HOMEDECOR.jpg'
import FURNISHING from '../images/FURNISHING.jpg'
import ACCESSORIES from '../images/ACCESSORIES.jpg'
import CLOTHES from '../images/CLOTHES.jpg'
import { Link } from 'react-router-dom'
function Products () {
  const category = ["HOMEDECOR","FURNISHING","ACCESSORIES","CLOTHES"];
  return (
    <div className="products" id="products-section">
      <h1 style={{marginLeft:'4.5%',paddingBottom:'3%'}}>Our Products</h1>
      <Link to= {`products/${category[0]}`}>
      <Card img={HOMEDECOR}  product={category[0]}/>
      </Link>
      <Link to= {`products/${category[1]}`}>
      <Card img={FURNISHING}  product={category[1]}/>
      </Link>
      <Link to= {`products/${category[2]}`}>
      <Card img={ACCESSORIES}  product={category[2]}/>
      </Link>
      <Link to= {`products/${category[3]}`}>
      <Card img={CLOTHES} product={category[3]} />
      </Link>
    </div>
  )
}
export default Products
