import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cakes from "./pages/Cakes";
import Hampers from "./pages/Hampers";
import Personalise from "./pages/Personalise";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/hampers" element={<Hampers />} />
          <Route path="/personalise" element={<Personalise />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
