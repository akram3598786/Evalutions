import { Link, useNavigate } from "react-router-dom";
import { ProductItem } from "./ProductItem";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getProduct_Done, getProduct_Fail, getProduct_Req } from "../Redux/Products-context/action";
// import NotePaper from "./NotePaper";
 import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import "./Style.css";


export const TodoList = () => {

    React.useEffect(() => {
     getProducts();
    }, []);

    const dispatch = useDispatch();  
    const Products = useSelector((store) => { return store.products.products }); 

    /*
    const {isLoading , todos, isError} = useSelector((state) => {
        return {
            isLoading  : state.isLoading,
           // todos : state.todos,
            isError : state.isError,
        }
    });
    */ 

    function getProducts(){ 
        dispatch(getProduct_Req());
        axios
            .get("http://localhost:3002/products")
            .then((res) => {
                // console.log(res.data)
                dispatch(getProduct_Done(res.data));
            })
            .catch((err) => {
                // Error handling
                console.log(err);
                dispatch(getProduct_Fail());
            });
    };


    return (
        <div >
            <h1>Products List</h1>
            <hr />
            <div className="NoteWall">
            <div className="todopapers">
                {Products.length > 0 &&
                    Products.map((product) => {
                        // <td style={{"color":"blueviolet"}}><Link to={`${prod.id}`}>See Details..</Link></td>
                        //  return <Link to="/"><TodoItem/></Link>
                        return <div>
                            <Box
                                sx={{
                                    display: 'flex',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: 128,
                                
                                    },
                                }}
                            >  
                                <Paper className='NotePaper' variant="outlined" square >
                                <h3 key={product.id}>{product.title}</h3>
                                <Link to={`/product/${product.id}`}>See Detail</Link>
                                </Paper>
                            </Box>
                            {/* <NotePaper /> */}
                           
                        </div>
                    })
                }
            </div>
        </div>
        </div>
    );
}