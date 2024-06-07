import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Component/Category/Category";
import Home from "./Pages/Home/Home";
import Product_Details from "./Pages/Product_Details/Product_Details";
import Category_Products from "./Pages/Category_Products/Category_Products";
import Buy from "./Pages/Buy/Buy";
import Cart from "./Pages/Cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Category />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product_details/:id" element={<Product_Details />} />
        <Route
          path="/category_products/:category"
          element={<Category_Products />}
        />
           <Route path="/buy" element={<Buy />} />
           <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
