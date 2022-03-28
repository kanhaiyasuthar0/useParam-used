import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    let {pro} = useParams();
    const [single , setSingle] = useState({})
    // console.log(pro)
    useEffect( async()=>{
        // console.log(pro)
        let res1 = await fetch(`http://localhost:3004/products/${pro}`);
        let res2 = await res1.json();
        setSingle(res2)
        // console.log(res2)
    },[])
  return (
      <>
      <h1>{single.name}</h1>
      <h3>{single.price}</h3>
      </>
  )
}

export default ProductDetails