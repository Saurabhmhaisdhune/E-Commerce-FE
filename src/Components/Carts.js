import React, { useState, useEffect } from "react";
import "./Carts.css";
import axios from "axios";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import {CgSpinner} from "react-icons/cg"


export default function Carts() {
  // const [loding,setLoading]=useState(null);

  const allprice=400;
  const [product, setProduct] = useState({
    name: "React from fb",
    price: 10,
    productBy: "FACEBOOK",
  });

  const makepayment= token =>{
    const body={
      token,
      product
    };
    const headers={
      "Content-Type":"application/json"
    };
    return fetch(``,{
      method:"POST",
      headers,
      body:JSON.stringify(body)
    })
    .then(response=>{
      console.log("Response",response);
      const {status}=response;
      console.log("Status",status);
    })
    .catch(error=>console.log(error));
  };
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const getData = () => {
    fetch("https://web-shopp.herokuapp.com/data/carts")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("https://web-shopp.herokuapp.com/data/carts/delete/" + id)
      .then((data) => getData());
  };

  const [count, setCount] = useState(1);
  const handleIncrement = (id) => {
    setCount(count + 1);
  };
  const handleDecrement = (id) => {
    setCount(count - 1);
  };
  return (
    <div className="carts">
        
      <div className="main-cart1">
        <div className="carts-text1">
          <HiArrowNarrowLeft
            onClick={() => navigate("/")}
            className="HiArrowNarrowLeft"
          />
          <span className="carts-text">Continue Shopping</span>
        </div>
        <hr />
        {products.map((value, index) => {
          return (
            <div className="main-cart" key={index}>
            
              <img
                src={value.url}
                alt="product-picture"
                className="cart-image"
              />
              <label className="cart-product-name">
                <span className="cart-product-name-bold">
                  {value.brand} - {value.category}
                  <br />
                </span>
                {value.modelName}
              </label>
             
              <label className="cart-product-final-price">
                ₹ {value.price * count}
              </label>
              <label
                className="cart-product-delete"
                onClick={() => handleDelete(value.id)}
              >
                Remove
              </label>
            </div>
          );
        })}
      </div>
      <div>
        <h2 className="cart-total">
          Cart Total: 500 ₹
          <StripeCheckout
            stripeKey="pk_test_51LqakBSH7Xqmg7IeNjL4893Y4nDuyjYw910LmfSDqSMRK18NZnEqDGuWCXJPt53tzN5UYNTNOnUDKHWyd3pJI8pg00Kdv6YqKd"
            token={makepayment}
            name="Card Details"
            amount={allprice}
            shippingAddress
            billingAddress
          >
            <button className="checkout-button">CHECKOUT</button>
          </StripeCheckout>
          
        </h2>
      </div>
    </div>
  );
}
