
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./comp.css";


export const EditProduct=()=>{

    const [Productitem, setProductitem] = useState({});
    const {productId} = useParams();
    const navigate = useNavigate();

    const [title, settitle] = useState();
    const [brand, setbrand] = useState();
    const [cat, setcat] = useState();

    const getProductitem = () => {  
    axios
       .get(`http://localhost:3002/products/${productId}`)
       .then((res) => {
          //   console.log(res);
          setProductitem(res.data);
       })
         .catch((err) => console.log("Error occured",err));
   }

   const handleSubmit=()=>{    
    Productitem.title = title;
    Productitem.brand = brand;
    Productitem.category = cat;

         axios
            .patch(`http://localhost:3002/products/${productId}`, Productitem, 'Content-Type": "application/json')
            .then(()=>{
                alert("Edited Successfully");
                navigate("/")
            })
   }

    const handleDelete = () => {
     axios
        .delete(`http://localhost:3002/products/${productId}`)
        .then(() => {
           alert("Todo deleted")
           navigate("/");
        });


  }

  
   useEffect(() => {
      getProductitem();
   }, []);


   return (
    <div className="editSec">
     <div>
     {/* <form onSubmit={handleSubmit}> */}
            <input type="text"  onChange={(e)=>settitle(e.target.value)} value={Productitem.title} />
            <input type="text" onChange={(e)=>setbrand(e.target.value)} value={Productitem.brand} />
            <input type="text" onChange={(e)=>setcat(e.target.value)}  value={Productitem.category} />
            {/* </form> */}
    
     </div>

<div>
<button onClick={()=>handleSubmit()}>Submit edit </button>
<button onClick={()=>handleDelete()}>Delete </button>
</div>

</div>


   );

   
}



