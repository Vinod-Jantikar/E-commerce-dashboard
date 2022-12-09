import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await fetch("http://localhost:6543/product/all-products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:6543/product/${id}`, {
      method: "delete",
    });

    result = await result.json();

    if (result) {
      getProducts();
    }
  };

  const handleChange = async (e) => {
    let key = e.target.value;
    if (key) {
      await fetch(`http://localhost:6543/product/search/${key}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }else {
      getProducts()
    }
  };

  console.log(products);
  return (
    <div>
      <h1>Products List</h1>

      <input
        type="text"
        className="input-box"
        placeholder="Search by name company or category"
        onChange={handleChange}
      />

      <ul className="product-list">
        <li>Product Name</li>
        <li>Product Price</li>
        <li>Product's Category</li>
        <li>Manufactured By</li>
        <li>Operation</li>
      </ul>
      { products.length > 0 ? products.map((item, index) => (
        <ul className="product">
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li>
            <button onClick={() => deleteProduct(item._id)}>Delete</button>
            <Link to={`/update-product/${item._id}`}>Update</Link>
          </li>
        </ul>
      ) ) : <h1>No Result Found</h1>}
    </div>
  );
};

export default Products;
