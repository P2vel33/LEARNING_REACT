import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPages from "../pages/PostIdPages";
import { privateRoutes, publicRoutes } from "../router/router";
import { AuthContext } from "../context";

const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  // useEffect(() => {
  //   console.log(isAuth);
  // }, [isAuth]);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((item) => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
      <Route path="/*" element={<Navigate to="/posts" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((item) => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
