import "./styles/App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <div className="navBar">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
