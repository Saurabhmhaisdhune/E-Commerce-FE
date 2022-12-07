import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

let initialValue = {
  name: "",
  usernames: "",
  passwords: "",
};

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
    setView(false);
  };
  const [view, setView] = useState(false);
  const handleview = () => {
    setView(true);
    setShow(false);
  };
  const registers = () => {
    handleSubmits();
    setView(false);
  };

  //for login
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { usernames: "", passwords: "" },
    onSubmit: (userDetails) => {
      console.log("onSubmit", userDetails);
      login(userDetails);
    },
  });

  const login = async (userDetails) => {
    const data = await fetch("https://shopping-app-beoy.onrender.com/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    if (data.status === 401) {
      alert("Invalid Credentials");
    } else {
      const user = await data.json();
      console.log(user.token);
      localStorage.setItem("token", user.token);
      navigate("/home");
    }
  };

  //for registration
  const [register, setRegister] = useState(initialValue);

  const handleChanges = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleSubmits = () => {
    axios
      .post(
        "https://shopping-app-beoy.onrender.com/users/register",
        JSON.stringify(register),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then(() => setRegister(initialValue));
  };
  return (
    <div className="login-main">
      <div className="login-1">
        {show ? (
          <div className="login-2">
            <label className="login-name">Login</label>

            <div className="login-4">
              <form onSubmit={formik.handleSubmit}>
                <label className="input-text">Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Email.."
                  onChange={formik.handleChange}
                  value={formik.values.usernames}
                  name="usernames"
                  className="login-input"
                />
                <br />
                <label className="input-text">Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Password.."
                  onChange={formik.handleChange}
                  value={formik.values.passwords}
                  name="passwords"
                  className="login-input"
                />
                <br />
                <button type="submit" className="login-button">
                  Login
                </button>
              </form>
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
                onChange={handleChanges}
                name="name"
              />
              <br />
              <label className="input-text">Email</label>
              <br />
              <input
                type="email"
                placeholder="Email.."
                name="usernames"
                className="login-input"
                onChange={handleChanges}
              />
              <br />
              <label className="input-text">Password</label>
              <br />
              <input
                type="password"
                placeholder="Password.."
                name="passwords"
                className="login-input"
                onChange={handleChanges}
              />
              <br />
              <button className="login-button" onClick={registers}>
                Register
              </button>
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
