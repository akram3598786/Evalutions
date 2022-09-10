import './App.css';
import { TodoList } from './components/Home';
import { Navbar } from './components/Navbar';
import {Routes, Route, useNavigate} from "react-router-dom";
import { Createproduct } from './components/Createproduct';
import { ProductItem } from './components/ProductItem';
import { LoginForm } from './components/Login';
import { useSelector } from 'react-redux';
import { EditProduct } from './components/EditProduct';

function App() {
  const isAuth = useSelector((store)=>store.isAuth.isAuth);
  // const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar/>
      {isAuth 
      ? (<Routes>
      <Route path='/' element={<TodoList/> }></Route>
      <Route path='/createproduct' element={<Createproduct/>}></Route>
      <Route path='/product/:productId' element={<ProductItem/>}></Route>
      <Route path='/product/:productId/edit' element={<EditProduct/>}></Route>
      <Route path='/login' element={<LoginForm/>}></Route>
    </Routes>)
      : <LoginForm/>}
      
    </div>
  );
}

export default App;
