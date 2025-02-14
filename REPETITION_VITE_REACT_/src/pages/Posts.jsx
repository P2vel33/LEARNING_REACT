import React, { useEffect, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/mymodal/MyModal";
import PostForm from "../components/PostForm";
import MyInput from "../components/UI/input/MyInput";
import MySelect from "../components/UI/select/MySelect";
import Loader from "../components/UI/loader/Loader";
import PostsList from "../components/PostsList";

const Posts = () => {
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

  const openPost = async (id) => {
    const response = await PostService.getOnePage(id);
    console.log(response.data[0]);
  };
  openPost(1);

  const createNewPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  return (
    <>
      <MyButton onClick={() => setVisiable(true)}>Create post</MyButton>
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
      )}
    </>
  );
};

export default Posts;
