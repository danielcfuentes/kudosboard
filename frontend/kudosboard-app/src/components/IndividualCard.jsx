import "./IndividualBoard.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const IndividualCard = ({
  cardId,
  cardTitle,
  cardDescription,
  cardOwner,
  cardLikes,
}) => {

  const handleDeleteCard = () => {
    fetch(`http://localhost:3000/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching posts:", error));
  };

  const handleLikeCard = () => {
    fetch(`http://localhost:3000/cards/like/${cardId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching posts:", error));
  };
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h3>{cardTitle}</h3>
          <p>{cardDescription}</p>
        </div>

        <div className="card-body">
          <p>Owner: {cardOwner}</p>
        </div>

        <div className="card-footer">
          <button className="upvoteButton" onClick={handleLikeCard}>
            Upvote: {cardLikes}
          </button>

          <button className="deleteButton" onClick={handleDeleteCard}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualCard;
