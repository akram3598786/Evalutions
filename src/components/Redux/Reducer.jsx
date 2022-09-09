import { ADD_CART_COUNT } from "./Action-type"

let initState={
    Cartcount : 0,
}

export const Reducer=(state = initState, {type, data})=>{

 switch(type){
    case ADD_CART_COUNT :{
        return {...state,Cartcount: (Cartcount+data)}
    }
    default : {
        return state;
    }
 }

} 