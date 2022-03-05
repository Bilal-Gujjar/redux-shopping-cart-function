
import './App.css';
//import Counter from './func/counter'
import Maincart from './func/main';
import Product2 from './pages/product2';
import Product1 from './pages/product1';
import Price from './pages/price';


function App() {
  return (
    <div style={{textAlign:"center"}}>
    <h1>Redux & Redux-toolkit in Action</h1>
    <Maincart/>
    {/* <Counter/> */}
    <hr/>
    <Product2/>
    <hr/>
    <Product1/>
    <hr/>
    <Price/>
    
      
    </div>
  );
}

export default App;
