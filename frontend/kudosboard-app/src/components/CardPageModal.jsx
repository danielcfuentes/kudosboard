import PropTypes from "prop-types";
import "./Modal.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardPageModal = ({ onClose }) => {
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  const [cardArthur, setCardArthur] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [cardGIF, setCardGIF] = useState("");
  const params = useParams();

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleCreateNewCard = () => {
    fetch(`http://localhost:3000/cards/${params.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: cardTitle,
        description: cardDescription,
        imageSrc: cardGIF,
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

  const handleSubmit = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=jMP4mg82kvdDMZaoKpWwPUXrDuxsluHK&q=${searchQuery}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    )
      .then((response) => response.json())
      .then((data) => {
        // Do something with the data, such as rendering it on the page
        setCardGIF(data.data[0].images.original.url);
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  // RETURN -------------------------------------------------------------------
  return (
    <section className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <h1 id="modalTitle">Create a New Card</h1>

        <div className="modal-details">
          <input
            type="text"
            placeholder="Enter card title"
            value={cardTitle}
            onInput={handleCardTitle}
            className="modal-input"
          />

          <input
            type="text"
            placeholder="Enter card description"
            value={cardDescription}
            onInput={handleCardDescription}
            className="modal-input"
          />

          <input
            type="text"
            value={cardGIF}
            onInput={(event) => setSearchQuery(event.target.value)}
            placeholder="Search GIFs..."
            className="modal-input"
          />
          <button type="submit" onClick={handleSubmit} className="create-button">
            Search
          </button>

          <input
            type="text"
            value={cardArthur}
            onInput={handleCardArthur}
            placeholder="Enter owner (optional)"
            className="modal-input"
          />
          <button className="create-button" onClick={handleCreateNewCard}>
            Create Card
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardPageModal;
