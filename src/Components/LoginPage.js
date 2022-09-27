import React, { useState } from "react";
import "./LoginPage.css";
import slideimage from "../icons/loginimage.jpg";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const [view, setView] = useState(false);
  const handleview = () => {
    setView(true);
  };
  return (
    <div className="login-main">
      <div className="login-1">
        {show ? (
          <div className="login-2">
            <label className="login-name">Login</label>

            <div className="login-4">
              <label className="input-text">Email</label>
              <br />
              <input
                type="email"
                placeholder="Email.."
                name="email"
                className="login-input"
              />
              <br />
              <label className="input-text">Password</label>
              <br />
              <input
                type="password"
                placeholder="Password.."
                name="password"
                className="login-input"
              />
              <br />
              <button className="login-button">Login</button>
            </div>
          </div>
        ) : (
          <div>
            <button onClick={handleShow} className="login-button-show">
              Tab here to Login
            </button>
          </div>
        )}
        {view ? (
          <div className="login-3">
            <label className="login-name">Register</label>
            <div className="login-4">
              <label className="input-text">Full Name</label>
              <br />
              <input
                type="text"
                placeholder="Full Name.."
                className="login-input"
              />
              <br />
              <label className="input-text">Email</label>
              <br />
              <input
                type="email"
                placeholder="Email.."
                name="email"
                className="login-input"
              />
              <br />
              <label className="input-text">Password</label>
              <br />
              <input
                type="password"
                placeholder="Password.."
                name="password"
                className="login-input"
              />
              <br />
              <button className="login-button">Register</button>
            </div>
          </div>
        ) : (
          <div>
            <button onClick={handleview} className="login-button-show">
              Tab here to Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
