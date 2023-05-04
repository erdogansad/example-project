import React from 'react'
import {Link} from "react-router-dom";

import "./Urunler.css";

const Urunler = (props) => {
  const {products} = props;

  console.log(products);

  return (
    <div className='product-container'>

      {
        products.map(product => {
          return (
            <div key={product.id} className='product'>
              <Link to={`/urun/${product.id}`}><img className='product-img' src={product.img} alt="" /></Link>
              <Link to={`/urun/${product.id}`}><h3 className='product-name'>{product.product}</h3></Link>
              <h4 className='product-price'>{product.price}</h4>
            </div>
          )
        })

      }

      
    </div>
  )
}

export default Urunler