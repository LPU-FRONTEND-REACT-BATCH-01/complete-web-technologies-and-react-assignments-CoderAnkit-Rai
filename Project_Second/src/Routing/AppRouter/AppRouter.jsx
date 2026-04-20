import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";

import Landing from "../Pages/Landing";
import About from "../Pages/About";
import Products from "../Pages/Products";
import Cart from "../Pages/Cart";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;