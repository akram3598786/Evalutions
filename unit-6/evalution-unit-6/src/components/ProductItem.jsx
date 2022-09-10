import styled from "styled-components";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct_Done, getProduct_Done, getProduct_Req } from "../Redux/Products-context/action";
import { useState } from "react";

export const ProductItem = () => {

   const [Productitem, setProductitem] = useState({});
  const {productId} = useParams();
   const navigate = useNavigate();

   let Wrapper = styled.div`
 display : flex;
 justify-content : space-around;
 flex-direction : column;
 padding : 50px;
`;
   let Div = styled.div`
display : flex;
justify-content : space-between;
align-items: center;
`;
 


   const getProductitem = () => {
    
    axios
       .get(`http://localhost:3002/products/${productId}`)
       .then((res) => {
          //   console.log(res);
          setProductitem(res.data);
       })
         .catch((err) => console.log("Error occured",err));
   }

  
   useEffect(() => {
      getProductitem();
   }, []);

   return (
      <Wrapper>
         <Link to="/"> Back to Products</Link>
         <Div>
            <h1>Product id</h1>
            <h1>Product</h1>
            <h1>Product Title</h1>
            <h1>Category</h1>
            <h1>Price</h1>
            <h1>Edit</h1>
         </Div>
         <Div>
            <h2>{productId}</h2>
            <img src={Productitem.image} alt="loading -img" />
            <h2>{Productitem.title}</h2>
            <h2>{Productitem.brand}</h2>
            <h2>{Productitem.category}</h2>
            <h2>{Productitem.price}</h2>
            <Link to={`/product/${productId}/edit`}>Edit Product</Link>
             
         </Div>
      </Wrapper>
   );
}