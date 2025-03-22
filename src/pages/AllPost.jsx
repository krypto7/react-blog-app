import React, { useEffect, useState } from "react";
import databaseService from "../appwrite/auth/config";
import { Container, PostCard } from "../components";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    databaseService.getPosts().then((response) => {
      console.log("Fetched Posts:", response); // Debugging
      setPosts(response?.documents || []);
    });
  }, []);

  return (
    <div className="py-8 w-full">
      <Container>
        <div className="flex flex-wrap">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard post={post} />
              </div>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
