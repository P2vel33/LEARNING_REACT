import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  <div className="navBar">
    <div className="navBar__items">
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
    </div>
  </div>;
};

export default Navbar;
