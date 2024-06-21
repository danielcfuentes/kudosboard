import PropTypes from "prop-types";
import "./Modal.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardPageModal.css";

const CardPageModal = ({ onClose }) => {
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  const [cardArthur, setCardArthur] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");
  const [cardGIF, setCardGIF] = useState([]);
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

  const handleSearchQuery = function (e) {
    const query = e.target.value;
    searchGIFS(query);
  };

  const searchGIFS = async (query) => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=jMP4mg82kvdDMZaoKpWwPUXrDuxsluHK&q=${query}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      );
      const data = await response.json();
      console.log(data);
      setCardGIF(data.data);
      console.log("data.data:", data.data);
    } catch (error) {
      // Handle any errors that occurred during the request
      console.log("inisde of error:", error);
      console.error(error);
    }
  };

  console.log("cardGIF:", cardGIF);

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
            onChange={handleSearchQuery}
            placeholder="Search GIFs..."
            className="modal-input"
          />

          {cardGIF.length > 0 && (
            <div className="GIFcontainer">
              {cardGIF.map((gif, index) => (
                <div key={index}>
                  <img className="GIFimg" src={gif.images.original.url} alt="GIF" />
                </div>
              ))}
            </div>
          )}

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
