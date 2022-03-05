
import {useSelector , useDispatch} from 'react-redux';
import {increment,decrement} from '../redux/slice'

export default function Counter() {
    
    const value = useSelector((state)=> state.valuer.value)
    
    const dis = useDispatch()
  return (
    <div>
        <h3>Counter  :  {value}</h3> 
         <button onClick={()=> {dis(increment()) 
                }}>Increment</button>
        <button onClick={()=> {dis(decrement()) 
            }}>Decrement</button>
    </div>
  )
}

