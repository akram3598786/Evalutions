import * as types from "./action-type.js";

  export const getProduct_Req=()=>{
    return {
        type : types.GET_PRODUCT_REQUEST,
    }
  }

  export const getProduct_Done=(data)=>{
    return {
        type : types.GET_PRODUCT_DONE,
        payload : data,
    }
  }

  export const getProduct_Fail=()=>{
    return {
        type : types.GET_PRODUCT_FAIL,
    }
  }
  
  export const addProduct_Req=()=>{
    return {
        type : types.POST_PRODUCT_REQUEST,

    }
  }
  
  export const addProduct_Done=()=>{
    return {
        type : types.POST_PRODUCT_DONE,

    }
  }

  export const addProduct_fail=()=>{
    return {
        type : types.POST_PRODUCT_FAIL,
    }
  }

  
