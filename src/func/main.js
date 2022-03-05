import {useSelector} from 'react-redux'
import Price from '../pages/price'

function Maincart() {
    const  avr = useSelector((state) => state.valuer.value)
    
  
    return (
     <div>
            <h2>Total Item Count : {avr}</h2>
            <h2><Price/></h2>
            
      </div>
    )
}
export default Maincart

