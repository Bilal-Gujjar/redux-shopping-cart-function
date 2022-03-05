import { inc } from '../redux/prsclice'
import {useSelector,useDispatch} from 'react-redux'

function Price() {
    
    const  price = useSelector((state) => state.price.value)
    const dispatch = useDispatch()
  return (
    <div>Price {price}
    
    </div>
  )
}

export default Price