import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

const Signup = () => {
  const { showAlert } = useGlobalContext();
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`http://localhost:5000/api/auth/createusers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // store token locally
      localStorage.setItem("token", json.authData);
      navigate("/");
      showAlert("Account created successfully", "success");
    } else {
      showAlert("Please enter all the fields correctly", "danger");
    }
  };
  const changeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <form className="container">
      <h1>Sign Up</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          aria-describedby="emailHelp"
          onChange={changeHandler}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          onChange={changeHandler}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          onChange={changeHandler}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="cpassword"
          name="cpassword"
          onChange={changeHandler}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary" onClick={submitHandler}>
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
