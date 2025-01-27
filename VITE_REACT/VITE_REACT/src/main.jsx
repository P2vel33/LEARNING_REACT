import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //   </Routes>
  // </BrowserRouter>
);
