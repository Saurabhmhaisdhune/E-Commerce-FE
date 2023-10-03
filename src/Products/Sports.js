import React from "react";
import "./Global.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sports() {
  const [products, setProducts] = useState([]);

  const getData = () => {
    fetch("https://shopping-app-beoy.onrender.com/data/sport")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (item) => {
    axios.post(
      "https://shopping-app-beoy.onrender.com/data/carts/post",
      JSON.stringify(item),
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };
  return (
    <div>
      <div className="category-name">Sports</div>
      <div className="all-flex-item">
        {products.map((value, index) => {
          return (
            <div className="all-card" key={value.id}>
              <img
                src={value.url}
                alt="product-images"
                className="product-images"
              />
              <div className="all-model-name">{value.modelName}</div>
              <div className="all-model-brand">
                {value.brand} - {value.category}
              </div>
              <div className="all-model-price">
                ₹{" "}
                <span className="previous-price">
                  {value.previousPrice}&nbsp;
                </span>
                ₹ {value.price}
              </div>
              {!value.added ? (
                <button
                  className="add-cart-button"
                  onClick={() => {
                    setProducts(
                      products.map((item) => {
                        return {
                          ...item,
                          added: item.id === value.id ? true : item.added,
                        };
                      })
                    );
                    handleSubmit(value);
                  }}
                >
                  Add To Cart
                </button>
              ) : (
                <button
                  className="add-cart-button"
                  onClick={() => {
                    setProducts(
                      products.map((item) => {
                        return {
                          ...item,
                          added: item.id === value.id ? false : item.added,
                        };
                      })
                    );
                  }}
                >
                  Added
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
