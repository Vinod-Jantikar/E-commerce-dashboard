import React from "react";
import { useState } from "react";
import './Addproduct.css'

const Addproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const submitProductData = async (e) => {
    e.preventDefault();

    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    await fetch("http://localhost:6543/product/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div className="add-product-div">
      <h1>Add Product</h1>
      <form onSubmit={submitProductData}>
        <input
          type="text"
          value={name}
          className="add-product-input"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Product name"
        />
      {error && !name && <span>Name field cannot be empty</span> }
        <input
          type="text"
          value={price}
          className="add-product-input"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Product price"
        />
         {error && !price && <span>Price field cannot be empty</span> }
        <input
          type="text"
          value={category}
          className="add-product-input"
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter Product category"
        />
         {error && !category && <span>Category field cannot be empty</span> }
        <input
          type="text"
          value={company}
          className="add-product-input"
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Enter Company name"
        />
         {error && !company && <span>Company field cannot be empty</span> }
        <input className="add-product-submit" type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default Addproduct;
