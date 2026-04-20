import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import pumaLogo from "../../assets/images.jpg";

function Navbar() {
  return (
    <nav className="puma-nav">
      <Link to="/" className="puma-logo">
        <img src={pumaLogo} alt="Puma" height="40" />
      </Link>
      <ul className="puma-links">
        <li><Link to="/" className="puma-link">Home</Link></li>
        <li><Link to="/about" className="puma-link">About</Link></li>
        <li><Link to="/products" className="puma-link">Products</Link></li>
        <li><Link to="/cart" className="puma-link">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
