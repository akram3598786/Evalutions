import React from "react";
import { useParams } from "react-router-dom";
import {CartContext} from "../context/CartContext";

const Product = () => {
  // Note: this id should come from api
  const [prod, setProd] = React.useState({})
  const {cartCount, handleCartUpdate} = React.useContext(CartContext)
  let {prodId}= useParams();

  React.useEffect(()=>{
    getData();
  })

  const getData = () => {

    fetch(`http://localhost:8080/Products/${prodId}`)
        .then((res) => res.json())
        .then((res) => setProd(res[0]))
        .catch((err) => console.log(err))
      
}



  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h1>Product details</h1>
      <h3 data-cy="product-name">{prod.name}</h3>
      <h6 data-cy="product-description">{prod.description}</h6>
      <button onClick={()=>handleCartUpdate(1)} data-cy="product-add-item-to-cart-button">Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
  );
};

export default Product;
