import { useEffect, useMemo, useState } from "react";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import PostService from "./API/PostService";
import MySelect from "./components/UI/select/MySelect";
// import PostService from "./API/PostService";

function App() {
  const [posts, setPosts] = useState([]);
  const [sortPosts, setSortPosts] = useState([]);
  const [sort, setSort] = useState("");
  useMemo(() => {
    posts.sort((a, b) => a[sort].localeCompare(b[sort]));
  }, [sort]);

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
      <PostForm createPost={createNewPost} />
      <select onChange={(event) => setSort(event.target.value)}>
        <option value="" disabled selected>
          Sort
        </option>
        <option value="title">of name</option>
        <option value="body">of description</option>
      </select>
      <PostsList posts={posts} remove={removePost} title={"Posts of JS"} />
    </>
  );
}

export default App;
