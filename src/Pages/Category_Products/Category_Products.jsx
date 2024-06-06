import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Category_Products = () => {
  const [categoryProducts, setCategoryProducts] = useState(null);

  const { category } = useParams();
  console.log(categoryProducts);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const products = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );

        setCategoryProducts(products.data);
      } catch (error) {
        console.log("Category Related Products Not Found:", error);
      }
    };

    fetchCategoryProducts();
  }, [category]);

  return (
    <div className="product_grid">
      {categoryProducts?.map((product, indx) => {
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

export default Category_Products;
