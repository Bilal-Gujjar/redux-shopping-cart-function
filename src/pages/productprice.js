import React from 'react'
import {useSelector} from 'react-redux'
function ProductPrice() {
 const fig = useSelector((state) => state.price.value)
  return (
    <div>ProductPrice : {fig}</div>
  )
}

export default ProductPrice