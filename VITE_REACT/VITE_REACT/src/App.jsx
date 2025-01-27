import "./styles/App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/navbar/Navbar";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/error" element={<Error />} />
        <Route path="/*" element={<Navigate to="/error" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
