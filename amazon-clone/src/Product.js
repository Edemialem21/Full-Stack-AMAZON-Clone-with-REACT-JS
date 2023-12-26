import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
    <div className='product_info'>
        <p>The lean startup</p>
        <p className='product_price'></p>
        <small>$</small>
        <strong>20</strong> 
        <div className='product_rating'>
        <p>♠</p>
        <p>♣</p>
        </div>    
    </div>
    </div>
  )
}

export default Product