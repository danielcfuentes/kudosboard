import CardPageModal from "./CardPageModal";
import React, { useEffect, useState } from "react";
import IndividualCard from "./IndividualCard";
import { useParams } from "react-router-dom";
import "./CardPage.css";

const CardPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [cards, setCards] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (isDeleted) {
      fetchCards();
      setIsDeleted(false);
    }
    if (isLiked) {
      fetchCards();
      setIsLiked(false);
    }else {
      fetchCards();
    }
  }, [isDeleted, isLiked]);

  async function fetchCards() {
    fetch(`http://localhost:3000/cards/${params.id}`)
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
        cardImage={card.gif}
        cardDescription={card.description}
        cardOwner={card.owner}
        cardLikes={card.likes}
        refreshPage={fetchCards}
        setIsDeleted={setIsDeleted}
        setIsLiked={setIsLiked}
      />
    );
  });

  return (
    <div className="bodyOfPage">
      <div className="Createcard">
        <button className="button" id="button-to-create" onClick={handleOpen}>
          Create a Card
        </button>
      </div>

      {openModal && <CardPageModal onClose={handleClose} />}

      <div className="boards">{getCards}</div>
    </div>
  );
};

export default CardPage;
