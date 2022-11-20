import React from "react";
import Post from "../Post/Post";

function Posts() {
  return (
    <div className="grid grid-cols-3 px-6 gap-4">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
