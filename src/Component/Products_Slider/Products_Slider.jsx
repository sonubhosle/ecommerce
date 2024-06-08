import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const Products_Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.log("Products Not Found :", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {products && (
        <Carousel responsive={responsive} className="carousel">
          {products.map((product, indx) =>{
            return(
                <Link to={`/product_details/${product.id}`} className="carousel_card" key={indx}>
      <img className="poster" src={product.image} alt="" />
      <div className="category">{product.category}</div>
      <div className="name">{product.title}</div>
      <div className="price"> ₹{product.price}</div>
      <div className="rating">
        <p className="rate">
          {product.rating.rate} <i class="bx bxs-star"></i>
        </p>
        <p className="stock">Stock : {product.rating.count}</p>
      </div>
    </Link>
            )
          } )}
        </Carousel>
      )}
    </>
  );
};

export default Products_Slider;
