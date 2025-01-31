import "./styles/App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
export default App;
