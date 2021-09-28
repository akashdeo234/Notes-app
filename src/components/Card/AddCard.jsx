import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./_addCard.scss";
const AddCard = ({ setCard, card }) => {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  /* Getting the value of heading */
  const saveHeadingHandler = (e) => {
    setHeading(e.target.value);
  };
  /* Getting the value of content */
  const saveContentHandler = (e) => {
    setContent(e.target.value);
  };
  /*Save btn */
  const saveCardHandler = (e) => {
    e.preventDefault();
    if (heading.length && content.length > 0) {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        heading: heading,
        text: content,
        date: date.toLocaleDateString(),
      };
      const newNotes = [...card, newNote];
      setCard(newNotes);
    }
  };
  return (
    <div className="add-card">
      <div className="top">
        <textarea
          placeholder="heading"
          className="heading"
          onChange={saveHeadingHandler}
        ></textarea>
        <textarea
          placeholder="context"
          className="context-txt"
          onChange={saveContentHandler}
        ></textarea>
      </div>
      <div className="bottom">
        <div className="btn" onClick={saveCardHandler}>
          Save
        </div>
      </div>
    </div>
  );
};

export default AddCard;
