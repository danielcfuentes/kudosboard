import "./IndividualBoard.css";
import PropTypes from "prop-types";

const IndividualCard = ({
  cardId,
  cardTitle,
  cardDescription,
  cardImage,
  cardOwner,
  cardLikes,
  setIsDeleted,
  setIsLiked,
}) => {
  const handleDeleteCard = () => {
    setIsDeleted(true);
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
    setIsLiked(true);
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
      <div className="board">
        <div className="text-card">
          <h2>{cardTitle}</h2>
          <img id="board-img" src={cardImage} alt="gif iamge" />
          <h4>Description: {cardDescription}</h4>
          <h4>Owner: {cardOwner}</h4>
        </div>

        <div className="button-container">
          <button className="button" onClick={handleLikeCard}>
            Upvote: {cardLikes}
          </button>

          <button className="button" onClick={handleDeleteCard}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

IndividualCard.propTypes = {
  cardId: PropTypes.number,
  cardTitle: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardOwner: PropTypes.string,
  cardLikes: PropTypes.number,
  setIsDeleted: PropTypes.func,
  setIsLiked: PropTypes.func,
};

export default IndividualCard;
