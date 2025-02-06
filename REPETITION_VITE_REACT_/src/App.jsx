import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import { use } from "react";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "JS",
      description: "JS JS JS",
    },
    {
      id: 2,
      name: "JS",
      description: "JS JS JS",
    },
    {
      id: 3,
      name: "JS",
      description: "JS JS JS",
    },
    {
      id: 4,
      name: "JS",
      description: "JS JS JS",
    },
    {
      id: 5,
      name: "JS",
      description: "JS JS JS",
    },
  ]);

  const createNewPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  return (
    <>
      <PostForm createPost={createNewPost} />
      <div className="">
        {posts.map((element) => (
          // console.log(element);
          <PostItem key={element.id} post={element} remove={removePost} />
        ))}
      </div>
    </>
  );
}

export default App;
