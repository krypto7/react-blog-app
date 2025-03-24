import React from "react";
import { Link } from "react-router-dom";
import databaseService from "../appwrite/auth/config";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block">
      <div className="bg-gray-100 rounded-xl p-4 h-full shadow-md transition-transform transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
          <img
            src={databaseService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300"
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-800 transition-all duration-300 transform opacity-80 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
