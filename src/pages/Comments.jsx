import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentCard from "../components/CommentCard";

import AddComment from "../components/AddComment"


function Comments() {
  const [comments, setComments] = useState(null);



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

    
 
    if (!comments) return <h3 className="loading">Loading...</h3>;

  return (
    <div className="commentsContainer">


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
     
         
   <AddComment />



    
    </div>
  );
}

export default Comments;