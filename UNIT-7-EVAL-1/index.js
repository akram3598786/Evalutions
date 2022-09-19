
import express, { json } from "express";
import fs from "fs";
// console.log(express);

const app = express();

app.use(express.json())

let port = 8080;
app.listen(port,(req, res)=>{
    console.log(`listening on port ${port} `);
});

app.get("/",(req, res)=>{
    res.send("This is HomePage");
})


// GET function ================>

app.get("/products",(req, res)=>{
    fs.readFile("./products.json",{encoding : "utf-8"}, (err, data)=>{
        //  console.log(data);
        res.send(data);
      })
})


// POST Function ================>

app.post("/products/create",(req,res)=>{

    fs.readFile("./products.json", (err, data)=>{
       const parsed = JSON.parse(data);
       parsed.Products = [...parsed.Products, req.body];
       fs.writeFile("./products.json", JSON.stringify(parsed),{encoding : 'utf-8'}, ()=>{
         res.send("New Product Added");
       }) 
    })
})

// DELETE Function ================>

app.delete("/products/:productId",(req,res)=>{
    let {productId} = req.params;
    // console.log("Id is =",productId);
    fs.readFile("./products.json", (err, data)=>{   
       const parsed = JSON.parse(data);
       parsed.Products = parsed.Products.filter((product)=>product.id != productId);
       fs.writeFile("./products.json", JSON.stringify(parsed),{encoding : 'utf-8'}, ()=>{
         res.send(" Product deleted");
       }) 
    })
})

// PATCH Function
app.patch("/products/:productId", (req, res)=>{
    let {productId} = req.params;

    fs.readFile("./products.json",(err, data)=>{
        const parsed = JSON.parse(data);
  
        parsed.Products.forEach((product)=> {if(product.id == productId)  product.Cartstatus = !product.Cartstatus})
        console.log(parsed.Products)
         fs.writeFile("./products.json",JSON.stringify(parsed),{encoding : 'utf8'},()=>{
            res.send("Product updated");
         })
    })
})






