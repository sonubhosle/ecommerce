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
      {categoryProducts?.map((item, indx) => {
        return (
          <Link to={`/product_details/${item.id}`} className='card' key={item.id}>
          <img src={item.image} alt='' />
          <div className='name'>{item.title}</div>
          <div className='price'> ₹{item.price}</div>
          <div className='rating'>
              <p className='rate'>{item.rating.rate} <i class='bx bxs-star'></i></p>
              <p className='stock'>Stock : {item.rating.count}</p>
          </div>
      </Link>
        );
      })}
    </div>
  );
};

export default Category_Products;
