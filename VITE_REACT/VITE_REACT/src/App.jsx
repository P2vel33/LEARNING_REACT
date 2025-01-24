import { useMemo, useRef, useState } from "react";
// import Counter from "./components/counter";
// import ClassCounter from "./components/ClassCounter";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./styles/App.css";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/mySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "DJavaScript", body: "4Description" },
    { id: 2, title: "BJavaScript", body: "2Description" },
    { id: 3, title: "CJavaScript", body: "5Description" },
    { id: 4, title: "AJavaScript", body: "1Description" },
    { id: 5, title: "LJavaScript", body: "6Description" },
    { id: 6, title: "EJavaScript", body: "3Description" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [selectedSort, setselectedSort] = useState("");

  const sortedPosts = useMemo(() => {
    console.log("WORK!");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visiable={modal} setVisiable={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        POSTS={sortedAndSearchedPosts}
        title={"Posts of JS"}
      />
    </div>
  );
}

export default App;
