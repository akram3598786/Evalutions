import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {CartContext} from "../context/CartContext";
import axios from "axios";

const Product = () => {
  // Note: this id should come from api
  const [prod, setProd] = React.useState({})
  const {cartCount, handleCartUpdate} = React.useContext(CartContext)
  // const [count, Setcount] = useState(0);
  let {prodId}= useParams();


  React.useEffect(()=>{
    getData();
  },[])

  const getData = () => {

    fetch(`http://localhost:8080/Products/${prodId}`)
        .then((res) => res.json())
        .then((res) => setProd(res))
        .catch((err) => console.log(err))
}
// console.log(prod)

const handleChangecartQty=(value)=>{

  prod.Cartqty = prod.Cartqty +value;
  let updated = prod;
 
  axios
  .patch(`http://localhost:8080/products/${prodId}`, updated, 'Content-Type": "application/json')
  .then((res)=>getData())
}

const handleremove=()=>{
  prod.CartSts = false;
  let updated = prod;
  // console.log(updated);
  handleCartUpdate(-1)
  axios
  .patch(`http://localhost:8080/products/${prodId}`, updated, 'Content-Type": "application/json')
  .then((res)=>getData())
}

const handleAddCart=()=>{
  prod.CartSts = true;
  let updated = prod;
  // console.log(updated);
  handleCartUpdate(1);
  axios
  .patch(`http://localhost:8080/products/${prodId}`, updated, 'Content-Type": "application/json')
  .then((res)=>getData())
}
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h1>Product details</h1>
      <h3 data-cy="product-name">{prod.name}</h3>
      <h6 data-cy="product-description">{prod.description}</h6>
      {/* <button onClick={()=>handleCartUpdate(1)} data-cy="product-add-item-to-cart-button">Add to cart</button> */}
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>handleChangecartQty(1)}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
            prod.Cartqty
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>handleChangecartQty(-1)}>-</button>
        {prod.CartSts ? <button onClick={()=>handleremove()} data-cy="product-remove-cart-item-button">Remove Item</button>
        :<button onClick={()=>handleAddCart()} data-cy="product-remove-cart-item-button">Add To Cart</button>}
        
      </div>
    </div>
  );
};


export default Product;
