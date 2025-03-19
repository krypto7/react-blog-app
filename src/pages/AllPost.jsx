import React, { useEffect, useState } from "react";
import databaseService from "../appwrite/auth/config";
import { Container, PostCard } from "../components";

function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    databaseService.getPosts([]).then((posts) => setPosts(posts?.documents));
  });

  return (
    <div className="py-8 w-full">
      <Container>
        {/* {posts.map((post) => (
          <PostCard key={post.$id} post={posts} />
        ))} */}

        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={posts} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
