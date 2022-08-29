import "./App.css";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Products from "./components/Products";
import Product from "./components/Product";


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>   
         <Route path="/" element={<Home/>} ></Route> 
         <Route path="/Login" element={ <Login/>} ></Route> 
         <Route path="/Products" element={<Products/>}></Route>
         <Route path="/Products/:prodId" element={<Product/>}></Route>
       
        </Routes>
  
    </div>
    // eslint-disable-next-line
  );
}

export default App;
