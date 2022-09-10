import * as types from "./action-type.js";

let initState = {
    products : [],
    isLoading : false,
    isError : false,
}

export const Productsreducer=(state=initState, action)=>{
  
    const {type, payload} = action;

    switch(type){     
       
        case types.GET_PRODUCT_REQUEST : {
            return {...state, isLoading : true, isError: false}   
        }

        case types.GET_PRODUCT_DONE : {
            return {...state,isLoading : false, products : [...payload], isError : false}    
        }
        case types.GET_PRODUCT_FAIL : {
            return {...state, isLoading : false, isError : true}
        }

        default: {
            return state;
        }
          
        
    }
}