import { useEffect, useMemo, useState } from "react";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import PostService from "./API/PostService";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import { usePosts } from "./hooks/usePosts";
import Loader from "./components/UI/loader/Loader";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/mymodal/MyModal";
import Posts from "./pages/Posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [visiable, setVisiable] = useState(false);
  const searchAndSortedPosts = usePosts(posts, sort, search);

  useEffect(() => {
    newPosts();
  }, []);

  const newPosts = async () => {
    const res = await PostService.getAll();
    if (res.data) {
      setIsLoading(false);
    }
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
      {/* <MyButton onClick={() => setVisiable(true)}>Create post</MyButton>
      <MyModal visiable={visiable} setVisiable={setVisiable}>
        <PostForm createPost={createNewPost} setVisiable={setVisiable} />
      </MyModal>

      <hr style={{ margin: "10px 0 10px 0" }} />
      <MyInput
        placeholder="Search"
        onChange={(event) => setSearch(event.target.value)}
        xyi={search}
      />
      <MySelect setSort={setSort} />
      {isLoading ? (
        <Loader />
      ) : (
        <PostsList
          posts={searchAndSortedPosts}
          remove={removePost}
          title={"Posts of JS"}
        />
      )} */}
      <Posts />
    </>
  );
}

export default App;
