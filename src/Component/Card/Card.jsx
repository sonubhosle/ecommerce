import React from "react";

const Card = ({product,indx}) => {
  return (
    <div className="card" key={indx}>
      <img src={product.image} alt="" />
      <div className="cat">{product.category}</div>
      <div className="name">{product.title}</div>
      <div className="price">{product.price}</div>
      <div className="rating">
        {product.rating.count}
        {product.rating.rate}
      </div>
    </div>
  );
};

export default Card;
