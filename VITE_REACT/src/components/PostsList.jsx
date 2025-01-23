import React from "react";
import PostItem from "./PostItem";

const PostsList = ({ posts, title }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((item) => {
        return <PostItem post={item} key={item.id} />;
      })}
    </div>
  );
};

export default PostsList;
