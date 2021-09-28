import React from "react";
import "./_indi-card.scss";
const IndivitualCards = ({ id, heading, text, date,setCard,card }) => {
  const deleteCardHandler = (e) => {
    e.preventDefault();
    let newNote = card.filter((indi)=> indi.id !== id)
    setCard(newNote);
  }
  return (
    <div className="card" id={id}>
      <div className="top" >
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
      <div className="bottom">
          <p>{date}</p>
          <div className="btn" onClick={deleteCardHandler}>Delete</div>
      </div>
    </div>
  );
};

export default IndivitualCards;
