import CardPageModal from "./CardPageModal";
import React, { useEffect, useState } from "react";
import IndividualCard from "./IndividualCard";
const CardPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  async function fetchCards() {
    fetch("http://localhost:3000/cards")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCards(data);
      })
      .catch((error) => {
        console.error("Error fetching photo:", error);
      });
  }
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const getCards = cards?.map((card, index) => {
    return (
      <IndividualCard
        key={index}
        cardId={card.id}
        cardTitle={card.title}
        cardDescription={card.description}
        cardOwner={card.owner}
        cardLikes ={card.likes}
      />
    );
  });

  return (
    <div>
      <button onClick={handleOpen}>Create a Card</button>

      {openModal && <CardPageModal onClose={handleClose} />}

      {getCards}
    </div>
  );
};

export default CardPage;
