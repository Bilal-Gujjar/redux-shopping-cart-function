import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {increment,decrement} from '../redux/slice'
import { inc ,dec} from '../redux/prsclice'

function Product2() {
    const [item,setItem] = useState(0)
    const [price,setPrice] = useState(0)
    const dip = useDispatch()
    const doo = useDispatch()

  return (
    <div>Product two : {item}
    <button onClick={()=>{
      dip(increment(),setItem(item+1))
      doo(inc(),setPrice(price+100))
      }}>+</button>
    <button onClick={()=>{
      dip(decrement(),setItem(item-1))
      doo(dec(),setPrice(price-100))
      }}>-</button>
    </div>
  )
}

export default Product2