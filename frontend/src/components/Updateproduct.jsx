import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Updateproduct.css";

const Updateproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const updateProduct = async () => {
    let result = await fetch(`http://localhost:6543/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    navigate("/");
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    await fetch(`http://localhost:6543/product/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setPrice(data.price);
        setCategory(data.category);
        setCompany(data.company);
      });
  };

  return (
    <div className="update-product-div">
      <h1>Update Product</h1>
      <input
        type="text"
        placeholder="Enter name"
        className="update-product-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Price"
        className="update-product-input"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Category"
        className="update-product-input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Company Name"
        className="update-product-input"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button className="update-product-submit" onClick={updateProduct}>Update Product</button>
    </div>
  );
};

export default Updateproduct;
