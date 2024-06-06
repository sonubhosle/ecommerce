import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product_Details = () => {
  const [productDetails, setProductsdetails] = useState(null);

  const { id } = useParams();
  console.log(id);

  console.log(productDetails);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );

        setProductsdetails(products.data);
      } catch (error) {
        console.log("Category Related Products Not Found:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product_details">
      <div className="left">
      <img src={productDetails?.image} alt={productDetails?.title} />

      </div>
       <div className="right">
       <div className="category">{productDetails?.category}</div>
      <div className="name">{productDetails?.title}</div>
      <div className="price">₹{productDetails?.price}</div>
      <div className="rating">
        <p>{productDetails?.rating.rate}</p>
        <p>{productDetails?.rating.count}</p>
      </div>
      <button>Buy Now</button>
      <button>Add Cart</button>
       </div>
    </div>
  );
};

export default Product_Details;
