import { ADD_CART_COUNT } from "./Action-type"


export const addToCart =()=>{
 let payload = {
    data : 1,
    type : ADD_CART_COUNT
 }
 return payload;
}