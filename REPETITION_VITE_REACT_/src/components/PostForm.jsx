import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ createPost, setVisiable }) => {
  const [addPost, setAddPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), ...addPost };
    createPost(newPost);
    setAddPost({ title: "", body: "" });
    setVisiable(false);
  };

  return (
    <div>
      <form className="">
        <MyInput
          placeholder="Name"
          onChange={(e) => setAddPost({ ...addPost, title: e.target.value })}
          xyi={addPost.title}
        />
        <MyInput
          placeholder="Description"
          onChange={(e) => setAddPost({ ...addPost, body: e.target.value })}
          xyi={addPost.body}
        />
      </form>
      <MyButton onClick={addNewPost}>Create</MyButton>
    </div>
  );
};

export default PostForm;
