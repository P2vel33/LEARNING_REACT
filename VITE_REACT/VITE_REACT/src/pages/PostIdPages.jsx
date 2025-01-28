import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPages = () => {
  const params = useParams();
  const [post, setPost] = useState();
  const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(params.id);
    console.log(response.data);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostsById(params.id);
  }, []);

  console.log(params);
  return (
    <div>
      <h1>You open post page`s ID = {params.id}</h1>
      {isLoading ? <Loader /> : <div>{post.title}</div>}
    </div>
  );
};

export default PostIdPages;
