import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ createPost }) => {
  const [addPost, setAddPost] = useState({ name: "", description: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), ...addPost };
    createPost(newPost);
    setAddPost({ name: "", description: "" });
  };

  return (
    <div>
      <form className="">
        <MyInput
          placeholder="Name"
          onChange={(e) => setAddPost({ ...addPost, name: e.target.value })}
          xyi={addPost.name}
        />
        <MyInput
          placeholder="Description"
          onChange={(e) =>
            setAddPost({ ...addPost, description: e.target.value })
          }
          xyi={addPost.description}
        />
      </form>
      <MyButton onClick={addNewPost}>Create</MyButton>
    </div>
  );
};

export default PostForm;
