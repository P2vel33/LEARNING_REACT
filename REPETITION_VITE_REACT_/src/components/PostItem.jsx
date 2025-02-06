import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div className="Post">
      <div>
        <strong>
          ID:{props.post.id}. Name:{props.post.name}
        </strong>
        <div>Description:{props.post.description}</div>
      </div>
      <div className="Post_btns">
        <MyButton onClick={() => props.remove(props.post)}>Remove</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
