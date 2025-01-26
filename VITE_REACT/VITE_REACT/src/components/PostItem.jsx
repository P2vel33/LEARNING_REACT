import React from "react";
import MyButton from "./UI/Button/MyButton";

const PostItem = (props) => {
  return (
    <div className="Post">
      <div className="Post__content">
        <strong>
          {props.number}. ({props.post.id}) {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="Post_btns">
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
