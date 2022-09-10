

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { addProduct_Done } from '../Redux/Products-context/action';


export const Createproduct = () => {
    const [image,setImg] = React.useState("");
    const [title,setTitle] = React.useState("");
    // const [gender,setGender] = React.useState("");
    const [price,setPrice] = React.useState("")
    const [inputVal,setInputVal] = React.useState("")
    const navigate = useNavigate();


    const addProduct = (e)=>{

      e.preventDefault();
        const payload = {
            image:image,
            title : title,
            price : price,
        }
        const dataPost = JSON.stringify(payload)
        fetch(`http://localhost:3002/products`,{
            method :"post",
            body : dataPost,
            headers : {
             "content-type": "application/json",
            },
        }).then(()=>{
          alert("Product Created sucuccess")
          addProduct_Done();
          navigate("/")
          
        })
    
    }
  return (
    
    <div>
        
            <label>Image Url : </label>
            <input type="text" placeholder='Enter Url' onChange={(e)=>setImg(e.target.value)} value={image}/><br /><br />
            <label>Title : </label>
            <input type="text" placeholder='Enter Title' onChange={(e)=>setTitle(e.target.value)} value={title}/><br /><br />
            {/* <label>Gender : </label>
            <input type="text" placeholder='Enter Gender'/><br /><br /> */}
            <label >Price : </label>
            <input type="text" placeholder='Enter Price' onChange={(e)=>setPrice(e.target.value)} value={price}/><br /><br />
            {/* <Link to=""><input type="submit" value="Create Product" style={{backgroundColor : "black",color : "white"}}/></Link> */}
            <Link to="/"><button onClick={addProduct} style={{backgroundColor : "black",color : "white"}}>Add Product</button></Link>
     
    </div>
  )
}