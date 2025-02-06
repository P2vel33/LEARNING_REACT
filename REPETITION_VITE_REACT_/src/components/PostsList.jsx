import React from "react";
import PostItem from "./PostItem";

const PostsList = ({ posts, remove }) => {
  return (
    <div className="">
      {posts.map((element) => (
        <PostItem key={element.id} post={element} remove={remove} />
      ))}
    </div>
  );
};

export default PostsList;
