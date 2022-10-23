import React from "react";
import Categories from "./Categories";
import Carts from "./Carts";
import { Route, Routes } from "react-router-dom";
import Televisions from "../Products/Televisions";
import Mobile from "../Products/Mobile";
import Clothes from "../Products/Clothes";
import Laptops from "../Products/Laptops";
import Sports from "../Products/Sports";
import Music from "../Products/Music";
import Furniture from "../Products/Furniture";
import Bikes from "../Products/Bikes";
import AllProducts from "./AllProducts";
import Layout from "./Layout";
import "../Components/AllProducts.css";


export default function Home() {
  return (
    <>
    <Layout>
    <div className="all-header">
          <label>
            <span className="all-header-text">One Platform</span>
            <br />
            <span className="all-header-text1">to make shopping Easier</span>
          </label>
        </div>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/tv" element={<Televisions />} />
        <Route path="/mp" element={<Mobile />} />
        <Route path="/cl" element={<Clothes />} />
        <Route path="/lt" element={<Laptops />} />
        <Route path="/sp" element={<Sports />} />
        <Route path="/mi" element={<Music />} />
        <Route path="/ft" element={<Furniture />} />
        <Route path="/bk" element={<Bikes />} />
        <Route path="/carts" element={<Carts />} />
      </Routes>
    </Layout>
    </>
  );
}
