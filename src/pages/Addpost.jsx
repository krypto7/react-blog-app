import React from "react";
import { Container, PostForm } from "../components/index.js";

function Addpost({ post }) {
  return (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  );
}

export default Addpost;
