import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPages from "../pages/PostIdPages";
import Posts from "../pages/Posts";

export const routes = [
  { path: "/about", element: <About /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:id", element: <PostIdPages /> },
];
