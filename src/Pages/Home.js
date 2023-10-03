import React, { useState } from "react";
import Carts from "./Carts";
import AllProducts from "../Components/AllProducts";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

export default function Home() {
  const [show, setShow] = useState(null);
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar setShow={setShow} count={count} />
      <Header/>
      {show == null ? (
        <AllProducts />
      ) : (
        <Carts setShow={setShow} setCount={setCount} />
      )}
    </>
  );
}
