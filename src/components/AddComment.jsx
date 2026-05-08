import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddComment(props) {
  const [selectSign, setSelectSign] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      signId: props.signId || selectSign,
      text: text,
    };
    console.log(body);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/comments`,
        body,
      );
      console.log("comment created");
      setSelectSign("");
      setText("");
      navigate("/comments");
      props.addNewComment(response.data);
      {
        /*window.location.reload(); used temporarily during checking addComment-update-status*/
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addComment">
      <h3>Add New Comment</h3>
      <form id="form" onSubmit={handleSubmit}>
        {/* used to avoid to see on the signdetail page*/}
        {!props.signId && (
          <select
            value={selectSign}
            onChange={(e) => setSelectSign(e.target.value)}
          >
            <option value="">Select a Sign to Comment</option>
            <option value="Aries">Aries</option>
            <option value="Taurus">Taurus</option>
            <option value="Gemini">Gemini</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
            <option value="Virgo">Virgo</option>
            <option value="Libra">Libra</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Sagittarius">Sagittarius</option>
            <option value="Capricorn">Capricorn</option>
            <option value="Aquarius">Aquarius</option>
            <option value="Pisces">Pisces</option>
          </select>
        )}

        <label id="label"></label>
        <textarea
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit">Add New Comment</button>
      </form>
    </div>
  );
}

export default AddComment;
