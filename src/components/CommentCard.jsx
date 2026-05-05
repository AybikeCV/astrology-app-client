import { Link } from "react-router-dom";
import axios from "axios";

function CommentCard(props) {



   const deleteComment = async() => {
    try {
    
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/comments/${props.id}`)
   props.getCommentData()
    } catch (error) {
      console.log(error)
   
    }
  }; 






  return (
    <div className="commentCard">

        <h4>Comment on {props.signId}:</h4>
      
      <p>{props.text}</p>
   
   <Link to={`/comments/${props.id}/edit`}>
   <button>Edit Comment</button></Link>
    <button onClick={deleteComment}>Delete Comment</button> 
    </div>
  );
}
export default CommentCard;
