import React, { useEffect, useState } from "react";
import databaseService from "../appwrite/auth/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]); // Always initialize as an empty array

  useEffect(() => {
    databaseService
      .getPosts()
      .then((posts) => {
        if (posts && posts.documents) {
          setPosts(posts.documents);
        } else {
          setPosts([]); // Ensure posts is always an array
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setPosts([]); // Handle errors gracefully
      });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard
                  $id={post.$id}
                  title={post.title}
                  featuredImage={post.featuredImage}
                />
              </div>
            ))
          ) : (
            <div className="p-2 w-full text-center">
              <h1 className="text-2xl font-bold text-gray-500">
                No posts available.
              </h1>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Home;
