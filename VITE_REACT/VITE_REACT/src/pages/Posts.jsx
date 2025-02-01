import { useEffect, useMemo, useRef, useState } from "react";
import PostList from "../components/PostList";
import MyButton from "../components/UI/Button/MyButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pages";
import Paggination from "../components/UI/Paggination/Paggination";
import { useObserver } from "../hooks/useObserver";

function Posts() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();
  // const observer = useRef();

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  // const useObserver = (ref, canLoad, isLoading, callback) => {
  // useEffect(() => {
  //   if (isPostLoading) return;
  //   if (observer.current) observer.current.disconnect();
  //   let cb = (entries, observer) => {
  //     if (entries[0].isIntersecting && page < totalPages) {
  //       setPage(page + 1);
  //       console.log(page);
  //     }
  //   };
  //   observer.current = new IntersectionObserver(cb);
  //   observer.current.observe(lastElement.current);
  // }, [isPostLoading]);
  // };

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    // fetchPosts();
  };

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
      {postError && <h1>ERROR {postError}</h1>}

      <PostList
        remove={removePost}
        POSTS={sortedAndSearchedPosts}
        title={"Posts of JS"}
      />

      <div
        ref={lastElement}
        style={{ height: "20px", backgroundColor: "red" }}
      ></div>

      {isPostLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      )}
      <Paggination
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;
