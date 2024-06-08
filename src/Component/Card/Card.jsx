import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product, indx }) => {
  return (
    <Link to={`/product_details/${product.id}`} className="card" key={indx}>
      <img src={product.image} alt="" />
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
  );
};

export default Card;
