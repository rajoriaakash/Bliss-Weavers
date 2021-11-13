import React from 'react'
import Card from './Card'
import HOMEDECOR from '../images/HOMEDECOR.jpg'
import FURNISHING from '../images/FURNISHING.jpg'
import ACCESSORIES from '../images/ACCESSORIES.jpg'
import CLOTHES from '../images/CLOTHES.jpg'
function Products () {
  return (
    <div className="products" id="products-section">
      <h1 style={{marginLeft:'4.5%',paddingBottom:'3%'}}>Our Products</h1>
      <Card img={HOMEDECOR}  product="HOMEDECOR"/>
      <Card img={FURNISHING}  product="FURNISHING"/>
      <Card img={ACCESSORIES}  product="ACCESSORIES"/>
      <Card img={CLOTHES} product="CLOTHES" />
    </div>
  )
}
export default Products
