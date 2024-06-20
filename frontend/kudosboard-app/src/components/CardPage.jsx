import CardPageModal from "./CardPageModal";
import React, { useState } from "react";


const CardPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <button onClick={handleOpen}>Create a Card</button>

      {openModal && <CardPageModal onClose={handleClose} />}
    </div>
  );
};

export default CardPage;
