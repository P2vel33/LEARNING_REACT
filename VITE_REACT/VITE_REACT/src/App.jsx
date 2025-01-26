import { useEffect, useMemo, useRef, useState } from "react";
// import Counter from "./components/counter";
// import ClassCounter from "./components/ClassCounter";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./styles/App.css";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
// import MyInput from "./components/UI/Input/MyInput";
import PostForm from "./components/PostForm";
// import MySelect from "./components/UI/Select/mySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";

// { id: 1, title: "DJavaScript", body: "4Description" },
// { id: 2, title: "BJavaScript", body: "2Description" },
// { id: 3, title: "CJavaScript", body: "5Description" },
// { id: 4, title: "AJavaScript", body: "1Description" },
// { id: 5, title: "LJavaScript", body: "6Description" },
// { id: 6, title: "EJavaScript", body: "3Description" },

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostLoading, setIsPostLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  async function fetchPosts() {
    setIsPostLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostLoading(false);
    }, 1500);
  }

  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POSTS</button>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visiable={modal} setVisiable={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          POSTS={sortedAndSearchedPosts}
          title={"Posts of JS"}
        />
      )}
    </div>
  );
}

export default App;
