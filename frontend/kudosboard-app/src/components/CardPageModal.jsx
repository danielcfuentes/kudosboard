import PropTypes from "prop-types";
import "./Modal.css";
import { useEffect, useState } from "react";

const CardPageModal = ({ onClose }) => {
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  const [cardArthur, setCardArthur] = useState("");
  const [cardQIF, setCardQIF] = useState("");

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleCreateNewCard = () => {
    fetch("http://localhost:3000/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: cardTitle,
        description: cardDescription,
        gif: cardQIF,
        owner: cardArthur,
      }),
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
    window.location.reload();
  };

  const handleCardTitle = (e) => {
    setCardTitle(e.target.value);
  };

  const handleCardArthur = (e) => {
    setCardArthur(e.target.value);
  };

  const handleCardDescription = (e) => {
    setCardDescription(e.target.value);
  };

  // RETURN -------------------------------------------------------------------
  return (
    <section className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <h1>Create a New Card</h1>

        <div className="modal-details">
          <input
            type="text"
            placeholder="Enter Card Title"
            value={cardTitle}
            onInput={handleCardTitle}
          />

          <input
            type="text"
            placeholder="Enter card description"
            value={cardDescription}
            onInput={handleCardDescription}
          />

          <form>
            <input type="text" placeholder="Search GIFs..." />
            <button>Search</button>

            <input
              type="text"
              value={cardArthur}
              onInput={handleCardArthur}
              placeholder="Enter owner (optional)"
            />
          </form>
          <button className="create-button" onClick={handleCreateNewCard}>
            Create Card
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardPageModal;
