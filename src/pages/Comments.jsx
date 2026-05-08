import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentCard from "../components/CommentCard";

import AddComment from "../components/AddComment";

function Comments() {
  const [comments, setComments] = useState(null);

  const addNewComment = (newComment) => {
    setComments((prev) => [...prev, newComment]);
    {
      /*used for seeing the added comment directly on the page without resfreshing*/
    }
  };

  useEffect(() => {
    getCommentData();
  }, []);

  const getCommentData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/comments`,
      );
      console.log(response.data);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!comments) {
    return (
      <div className="loadingContainer">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="pageContainer">
      {comments.map((eachComment) => {
        return (
          <CommentCard
            className="commentCard"
            key={eachComment.id}
            comments={comments}
            {...eachComment}
            getCommentData={getCommentData}
          />
        );
      })}

      <AddComment addNewComment={addNewComment} />
    </div>
  );
}

export default Comments;
