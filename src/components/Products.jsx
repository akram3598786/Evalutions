import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [loading, setloading] = React.useState(false);
   const [error, seterror] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    setloading(true);
    fetch(`http://localhost:8080/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err))
      .finally(()=>setloading(false));
  }, []);

  return (
    
    <>
    <h1>Products list</h1>
      
          {loading
            ? <h1>Loading...</h1>
            : error ? (<h1 style={{ "color": "red", "textAlign": "center" }}>Error occured : Something went wrong</h1>)
                :
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>INR : {product.description}</td>

                <td>
                  <Link to={`/Products/${product.id}`}>More...</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
};

export default Products;

/*

    const fetchAndUpdateData = () => {
        // https://fakestoreapi.com/products
        setLoading(true)
        fetch(`http://localhost:4000/Todos?_page=${Page}&_limit=5`)
            .then((res) =>{
              let total = res.headers.get("X-Total-Count");
              settotalItem(+total);
               return res.json()
            })
            .then((res) => {
                  console.log(res);
                setTodolist(res)
            })
            .catch((err) => setError(err))
            .finally(() => {
                setLoading(false);
            });
    }
*/