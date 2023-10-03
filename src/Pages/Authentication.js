import React, { useState } from "react";
import "./authentication.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

let initialValue = {
  name: "",
  usernames: "",
  passwords: "",
};

export default function LoginPage() {
  // const [show, setShow] = useState(false);
  // const handleShow = () => {
  //   setShow(true);
  //   setView(false);
  // };
  // const [view, setView] = useState(false);
  // const handleview = () => {
  //   setView(true);
  //   setShow(false);
  // };
  // const registers = () => {
  //   handleSubmits();
  //   setView(false);
  // };

  //for login
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { usernames: "", passwords: "" },
    onSubmit: (userDetails) => {
      login(userDetails);
    },
  });

  const login = async (userDetails) => {
    const data = await fetch(
      "https://shopping-app-beoy.onrender.com/users/login",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userDetails),
      }
    );

    if (data.status === 401) {
      alert("Invalid Credentials");
    } else {
      const user = await data.json();
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
      .then(() => {
        setRegister(initialValue);
        window.location.reload(true);
      });
  };
  return (
    <div className="background">
      <div className="login">
        <div>
          <form onSubmit={formik.handleSubmit} className="lContainer">
            <p className="head-line">Login</p>

            <input
              type="email"
              placeholder="Email.."
              onChange={formik.handleChange}
              value={formik.values.usernames}
              name="usernames"
              className="lInput"
            />
            <input
              type="password"
              placeholder="Password.."
              onChange={formik.handleChange}
              value={formik.values.passwords}
              name="passwords"
              className="lInput"
            />
            <button type="submit" className="lButton">
              Login
            </button>
          </form>
        </div>
      </div>
      <h1>Web-Shopping</h1>
      <div className="Register">
        <div className="lContainer">
          <p className="head-line">Register</p>
          <input
            type="text"
            placeholder="Full Name.."
            className="lInput"
            onChange={handleChanges}
            name="name"
          />
          <input
            type="email"
            placeholder="Email.."
            name="usernames"
            className="lInput"
            onChange={handleChanges}
          />
          <input
            type="password"
            placeholder="Password.."
            name="passwords"
            className="lInput"
            onChange={handleChanges}
          />
          <button className="lButton" onClick={handleSubmits}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
