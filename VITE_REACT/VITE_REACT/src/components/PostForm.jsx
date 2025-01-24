import React, { useState } from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      ...post,
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form action="">
      <MyInput
        type="text"
        placeholder="Name post"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Post`s description"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      {/* //Неуправляемый компонент
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Post`s description"
        /> */}
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};

export default PostForm;
