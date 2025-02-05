import React from "react";

const PostItem = (props) => {
  return (
    <div className="Post">
      <div>
        <strong>
          ID:{props.posts.id}. Name:{props.posts.name}
        </strong>
        <div>Description:{props.posts.description}</div>
      </div>
    </div>
  );
};

export default PostItem;
