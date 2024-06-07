import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Products from '../../Component/Products/Products'

const Product_Details = () => {
  const [productDetails, setProductsdetails] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();

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

  const redirectToBuyNow = () => {
    navigate("/buy");
  };

  const redirectToCart = () => {
    navigate("/cart");
  };

  return (
    <>
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
        <button onClick={redirectToBuyNow}>Buy Now</button>
        <button onClick={redirectToCart}>Add Cart</button>
      </div>
    </div>

    <Products />
    
    </>
  );
};

export default Product_Details;
