import React from "react";
import { Navigate, Route, Routes } from "react-router";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPages from "../pages/PostIdPages";
import { routes } from "../router/router";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((item) => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
      <Route path="/*" element={<Navigate to="/posts" replace />} />
    </Routes>
  );
};

export default AppRouter;
