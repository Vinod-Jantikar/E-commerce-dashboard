import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const submitLogInData = async (e) => {
    e.preventDefault();

    let result = await fetch("http://localhost:6543/user/login", {
      method: "post",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    navigate("/");
    localStorage.setItem("loggedinuser", JSON.stringify(result));
  };

  useEffect(() => {
    const user = localStorage.getItem("loggedinuser");
    if (user) {
      navigate("/");
    }
  }, []);
  return (
    <div className="login-div">
      <form onSubmit={submitLogInData}>
        <h1>Log In</h1>
        <input
          type="text"
          onChange={handleChange}
          className= "login-input"
          placeholder="Enter Email"
          name="email"
          value={loginData.email}
        />
        <input
          type="password"
          onChange={handleChange}
          className= "login-input"
          placeholder="Enter Password"
          name="password"
          value={loginData.password}
        />
        <input className="login-submit" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
