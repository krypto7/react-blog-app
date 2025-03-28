import React, { useEffect, useState } from "react";
import { AddPost, Container } from "../components/index.js";
import databaseService from "../appwrite/auth/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      databaseService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);


  return post ? (
    <div className="py-8">
      <Container>
        <AddPost post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
