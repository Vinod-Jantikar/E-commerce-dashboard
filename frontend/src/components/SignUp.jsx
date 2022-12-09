import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const submitFormData = async (e) => {
    e.preventDefault();

    let result = await fetch("http://localhost:6543/user/register", {
      method: "post",
      body: JSON.stringify(inputData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();

    navigate("/");
    localStorage.setItem("user", JSON.stringify(result));
  };
  useEffect(() => {
    const auth = localStorage.getItem("user");

    if (auth) {
      navigate("/");
    }
  }, []);

  return (
    <div className="register-div">
      <h1>Register</h1>
      <form  onSubmit={submitFormData}>
        <input
          type="text"
          name="name"
          className="register-input"
          value={inputData.name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          className="register-input"
          value={inputData.email}
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="register-input"
          value={inputData.password}
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <input className="register-submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignUp;
