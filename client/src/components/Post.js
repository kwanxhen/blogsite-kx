import React from "react";

import PostTitle from "./PostTitle";
import PostDateAndTime from "./PostDateAndTime";
import PostBody from "./PostBody";

function Post() {
  return (
    <div>
      <PostTitle />
      <PostDateAndTime />
      <PostBody />
      <hr
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          border: "0",
          borderTop: "1px solid rgba(0, 0, 0, 0.2)",
        }}
      />
    </div>
  );
}

export default Post;
