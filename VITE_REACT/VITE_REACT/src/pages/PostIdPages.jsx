import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPages = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostsById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getComments(params.id);
    console.log(response.data);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostsById();
    fetchComments();
  }, []);

  return (
    <div>
      <h1>You open post page`s ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h2>
            {post.id}. {post.title}
          </h2>
          <div>
            {comments.map((item) => (
              <div key={comments.id}>
                <h3 style={{ marginTop: "20px" }}>{item.email}</h3>
                <h4>{item.body}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostIdPages;
