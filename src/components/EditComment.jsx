import { useState, useEffect } from "react";
import axios from "axios"; // used for calling the API
import { useParams, useNavigate } from "react-router-dom";

function EditComment() {
  const navigate = useNavigate();

  const { commentId } = useParams();

  const [text, setText] = useState("");

  useEffect(() => {
    getCommentData();
  }, []);

  const getCommentData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/comments/${commentId}`,
      );
      console.log(response.data);

      setText(response.data.text);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const body = {
      text: text,
    };

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/comments/${commentId}`,
        body,
      );

      navigate(`/comments/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="editComment">
      <h3>Edit Comment</h3>

      <form onSubmit={handleFormSubmit}>
        <label></label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />

        <button type="submit">Edit Comment</button>
      </form>
    </div>
  );
}

export default EditComment;
