import Shoes from "./Pages/Shoes"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Pages/ShoesComponent/Navbar/Navbar"
import Footer from "./Pages/ShoesComponent/Footer/Footer"
import Men from "./Pages/Mens/Men"
import SingleProduct from "./Pages/SingleProduct/SingleProduct"
import Cart from "./Pages/Cart/Cart"
import Checkout from "./Pages/Checkout/Checkout"

function App() {
  return (
   
      <BrowserRouter>
      <Navbar/>
      <Routes>
    

        <Route path="/" element={<Shoes/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/singleproduct" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      
     
        
       
      </Routes>
      <Footer/>
      </BrowserRouter>
    
   
  );
}

export default App;
