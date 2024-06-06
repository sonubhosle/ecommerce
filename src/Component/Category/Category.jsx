import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState(null);


  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const category = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(category.data);
      } catch (error) {
        console.log("Category Not Found :", error);
      }
    };
    fetchCategory();
  }, []);

  return (
    <div className="categories">
      {categories?.map((category, index) => {
        return <Link to={`/category_products/${category}`}>{category}</Link>;
      })}
    </div>
  );
};

export default Category;
