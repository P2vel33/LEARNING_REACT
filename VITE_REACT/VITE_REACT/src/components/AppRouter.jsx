import React from "react";
import { Navigate, Route, Routes } from "react-router";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPages from "../pages/PostIdPages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/posts/:id" element={<PostIdPages />} />
      <Route path="/error" element={<Error />} />
      <Route path="/*" element={<Navigate to="/error" replace />} />
    </Routes>
  );
};

export default AppRouter;
