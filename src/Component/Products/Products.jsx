import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [sortOrder, setSortOrder] = useState("aec");
  const [sortByPriceOrder, setSortByPriceOrder] = useState("aec");

  useEffect(() => {
    const apiData = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products?sort=${sortOrder}`
        );
        setProducts(res.data);
      } catch (error) {
        console.log("Products Not Found :", error);
      }
    };
    apiData();
  }, [sortOrder]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSortByPriceOrderChange = (e) => {
    setSortByPriceOrder(e.target.value);
  };

  useEffect(() => {
    if (products) {
      const sortedProducts = [...products].sort((a, b) => {
        if (sortByPriceOrder === "aec") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      setProducts(sortedProducts);
    }
  }, [sortByPriceOrder]);

  return (
    <>
      <Filters
        sortOrder={sortOrder}
        handleSortByPriceOrderChange={handleSortByPriceOrderChange}
        handleSortChange={handleSortChange}
        sortByPriceOrder={sortByPriceOrder}
      />

      <div className="product_grid">
        {products?.map((item, index) => (
          <Card product={item} index={index} />
        ))}
      </div>
    </>
  );
};

export default Products;
