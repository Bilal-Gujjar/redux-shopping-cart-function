import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {increment,decrement,} from '../redux/slice'
import { inc ,dec} from '../redux/prsclice'
// import ProductPrice from './productprice'
function Product1() {
const [item,setItem] = useState(0)
const [price,setPrice] = useState(0)

const dip = useDispatch()
const doo = useDispatch()
  return (
    <div>
      Product  one : {item }
      <div>
      Product Price : {price}
      </div>

    <button onClick={()=>{
      dip(increment(),setItem(item+1))
      doo(inc(),setPrice(price+100))
      // doo(inc(),setPrice(price+item))
                }}>+</button>
    <button onClick={()=>{
      dip(decrement(),setItem(item-1))
      doo(dec())
      // doo(dec(),setPrice(price+item))
    }}>-</button>
    </div>
  )
}

export default Product1