import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ remove, POSTS, title }) => {
  if (!POSTS.length) {
    return <h1 style={{ textAlign: "center" }}>Posts undefined!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {POSTS.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames={"Post"}>
            <PostItem
              remove={remove}
              number={index + 1}
              post={post}
              key={post.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
