import { useEffect, useMemo, useState } from "react";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import PostService from "./API/PostService";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import { usePosts, useSortedPosts } from "./hooks/usePosts";

// import PostService from "./API/PostService";

function App() {
  const [posts, setPosts] = useState([]);
  // const [sortPosts, setSortPosts] = useState([]);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const searchAndSortedPosts = usePosts(posts, sort, search);
  // console.log(searchAndSortedPosts);
  // useMemo(() => {
  //   if (search && Array.isArray(sortPosts)) {
  //     sortPosts.filter((item) => {
  //       return item.title.toLowerCase().includes(search);
  //     });
  //   }
  // }, [search]);

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
      <MyInput
        placeholder="Search"
        onChange={(event) => setSearch(event.target.value)}
        xyi={search}
      />
      <PostForm createPost={createNewPost} />
      <MySelect setSort={setSort} />
      <PostsList
        posts={searchAndSortedPosts}
        remove={removePost}
        title={"Posts of JS"}
      />
    </>
  );
}

export default App;
