import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(null);
  console.log(products);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.log("Products Not Found :", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product_grid">
      {products?.map((product, indx) => {
        return (
          <Link to={`/product_details/${product.id}`} className="card">
            <img src={product.image} alt={product.title} />
            <div className="category">{product.category}</div>
            <div className="name">{product.title}</div>
            <div className="price">₹{product.price}</div>
            <div className="rating">
              <p>{product.rating.rate}</p>
              <p>{product.rating.count}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
