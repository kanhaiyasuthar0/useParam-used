
// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

    
      <Navbar/>
          {/* <Home/>
          <Products/> */}
      <Routes>
      <Route path="/" element={<Home/>}>
         

      </Route>
      <Route path="/products/:pro" element={<ProductDetails/>}>
      
       </Route> 
      <Route path='/products' element={<Products/>}>
        {/* <Products/> */}
        </Route>
    </Routes>
    
      
    </Router>
    </div>
  );
}

export default App;
