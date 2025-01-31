import React, { useContext } from "react";
import { Link } from "react-router";
import MyButton from "../Button/MyButton";
import { AuthContext } from "../../../context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navBar">
      <MyButton onClick={logout}>Exit</MyButton>
      <div className="navBar__items">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
