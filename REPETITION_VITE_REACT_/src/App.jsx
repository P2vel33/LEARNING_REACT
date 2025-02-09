import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import { use } from "react";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import axios from "axios";
import PostService from "./API/PostService";
// import PostService from "./API/PostService";

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    newPosts();
  }, []);

  const newPosts = async () => {
    const res = await PostService.getAll();
    setPosts(res.data);
  };

  const createNewPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  return (
    <>
      <button onClick={newPosts}>Download</button>
      <PostForm createPost={createNewPost} />
      <PostsList posts={posts} remove={removePost} title={"Posts of JS"} />
    </>
  );
}

export default App;
