import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home/home";
import Todo from "./page/todo/todo";
import Calculator from "./page/Calculator/Calculator";
import Layout from "./layout/Layout/Layout";
import Product from "./page/Product/product";
import Cart from "./page/Cart/cart";
import Animation from "./page/Animation/animation";
import Component from "./page/Component/component";

import { fetchProducts } from "./data/products";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Login from "./page/Login/login";

function App() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [tab, setTab] = useState("home");

  useEffect(() => {
    setProducts(fetchProducts());
  }, []);

  if (token === "") {
    return <Login setToken={setToken} setRole={setRole} />;
  } else {
    return (
      <div className="app-container">
        <HashRouter>
          <Routes>
            <Route
              element={
                <Layout
                  products={products}
                  carts={carts}
                  tab={tab}
                  setTab={setTab}
                  setToken={setToken}
                />
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/home" element={<Home />} />
              <Route path="/component" element={<Component />} />
              <Route
                path="/product"
                element={
                  <Product
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                  />
                }
              />
              <Route
                path="/cart"
                element={<Cart carts={carts} setCarts={setCarts} />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
