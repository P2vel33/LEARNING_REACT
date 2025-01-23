import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostsList from "./components/PostsList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";

function App() {
  const [postsJS, setPostsJS] = useState([
    { id: 1, title: "JavaScript", body: "Learn JS" },
    { id: 2, title: "JavaScript 2", body: "Learn JS" },
    { id: 3, title: "JavaScript 3", body: "Learn JS" },
    { id: 4, title: "JavaScript 4", body: "Learn JS" },
  ]);
  const [title, setTitle] = useState("");

  const bodyInputRef = useRef();

  function addNewPost(event) {
    event.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.valueOf);
  }

  return (
    <div className="App">
      <form action="">
        {/* <MyInput
          type="text"
          placeholder="Name post"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> */}

        <input type="text" ref={bodyInputRef} />
        <MyInput type="text" placeholder="Post`s description" />
        <MyButton onClick={addNewPost} />
      </form>
      <PostsList posts={postsJS} title="List Posts JS" />
    </div>
  );
}

export default App;
