import React from "react";
import PostItem from "./PostItem";

const PostsList = ({ posts, remove, title }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Undefined posts</h1>;
  }

  return (
    <div className="">
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((element) => (
        <PostItem key={element.id} post={element} remove={remove} />
      ))}
    </div>
  );
};

export default PostsList;
