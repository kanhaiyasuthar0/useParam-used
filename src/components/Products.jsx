import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
    const navigate = useNavigate()

  useEffect(async() => {
    let res1 = await fetch(`http://localhost:3004/products`)
    let res2 = await res1.json();
    setAllProducts(res2)
  },[]);

  const handleClick = (id)=>{
    navigate(`/products/${id}`)
  }

  return (
    <>
      <h2>Products</h2>
      <table className="table">
          <thead>

        <tr scope="row">
          <th scope="col">name</th>
          <th scope="col">price</th>
        </tr>
          </thead>
          <tbody>
        {allProducts.map((product) => {
          return (
            <tr key={product.id}  scope="row">
              <td>{product.name}</td>
              <td>{product.price}</td>
             
              <td ><button onClick={()=>handleClick(product.id)} type="button" className="btn btn-outline-secondary">Buy</button></td>
            </tr>
          );
        })}</tbody>
      </table>
     
 

    </>
  );
};

export default Products;
