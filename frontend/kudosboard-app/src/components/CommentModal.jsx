import PropTypes from "prop-types";
import "./CommentModal.css";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CommentModal = ({ onClose }) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };
  // RETURN -------------------------------------------------------------------
  return (
    <section className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h1 id="modalTitle">Comments</h1>
        <div className="modal-details">
          {comments.map((comment, index) => (
            <div
              key={index}
              className={`comment ${index % 2 === 0 ? "left" : "right"}`}
            >
              <p>{comment}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newComment}
            placeholder="Add a comment..."
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </section>
  );
};

export default CommentModal;
