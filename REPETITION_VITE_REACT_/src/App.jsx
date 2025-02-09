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
// import PostService from "./API/PostService";

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JS",
      body: "JS JS JS",
    },
    {
      id: 2,
      title: "JS",
      body: "JS JS JS",
    },
    {
      id: 3,
      title: "JS",
      body: "JS JS JS",
    },
    {
      id: 4,
      title: "JS",
      body: "JS JS JS",
    },
    {
      id: 5,
      title: "JS",
      body: "JS JS JS",
    },
  ]);

  // useEffect(() => {
  //   newPosts();
  // }, []);

  const newPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
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
