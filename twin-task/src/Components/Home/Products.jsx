import { useEffect, useState } from "react";
import './Products.css'


export default function Products() {

    const [products, setproducts] = useState(([]));


    useEffect(() => {
        fetch("https://originhighway-staging-kxyaws5ixa-uc.a.run.app/proxy/catalog/products?page=1").
            then((res)=>res.json()).
            then((res) => setproducts(res.data.products))
            .catch((err) => console.log(err))
    },[])

    return (
        <>
            <div className="container">
                <h1>products</h1>
                <div>
               {products.length > 0 ? 
               products.map((ele)=>{
                return (
                    <div className="card" key={ele.id}>
                    <img src={ele.gs1_images.top_left} alt="" />
                    <p>{ele.brand}</p>
                    <p>{ele.description}</p>
                    <p>{ele.company_detail.name}</p>
                </div>
                )
               })
               : null}
               </div>
            </div>
        </>
    )
}