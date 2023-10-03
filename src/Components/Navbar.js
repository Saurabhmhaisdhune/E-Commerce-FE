import React from "react";
import "./NavBar.css";
import bags from "../icons/shoppingbags.jpg";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";

export default function Navbar({ setShow, count }) {
  return (
    <nav className="navbar">
      <div className="bag-name">
        <img src={bags} alt="bags icon" className="bag-img" />
        <span className="app-name">&nbsp;WEB-Shopping</span>
      </div>
      <div>
        <span className="navbar-search">
          <input type="search" placeholder="Search..." className="searchbar" />
          <BiSearchAlt2 className="BiSearchAlt2" />
        </span>
      </div>
      <div
        className="navbar-carts"
        onClick={() => {
          setShow("nav");
        }}
      >
        Cart
        <RiShoppingCartLine className="RiShoppingCartLine" />
        <span className="carts-count">{count}</span>
      </div>
    </nav>
  );
}
