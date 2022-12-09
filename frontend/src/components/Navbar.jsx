import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      {user ? (
        <ul className="navbar-ul">
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/add-product"> Add Product </Link>{" "}
          </li>
          <li>
            <Link to="/update-product">Update Product</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Log out  ({JSON.parse(user).name})
            </Link>{" "}
          </li>
        </ul>
      ) : (
        <ul className="nav-ul">
          <li>
            <Link to="/signup">Sign up</Link>{" "}
          </li>

          <li>
            <Link to="/login">Login</Link>{" "}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
