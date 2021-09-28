import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { colorMoodContext } from "../../Context/Context";
import Card from "../Card/Card";
import "./_main.scss";
function Main() {

  const [input, setInput] = useState(""); //state to get the value of input field
  const { color, setColor } =
  useContext(colorMoodContext); /* color context state and styles */
  /* Card data */
  const [card, setCard] = useState([
    {
      id: nanoid(),
      heading: "Heading one",
      text:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ad quas, voluptatem nam soluta blanditiis.",
      date: "9/25/2021",
    },
    {
      id: nanoid(),
      heading: "Heading two",
      text:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ad quas, voluptatem nam soluta blanditiis.",
      date: "9/26/2021",
    },
    {
      id: nanoid(),
      heading: "Heading three",
      text:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ad quas, voluptatem nam soluta blanditiis.",
      date: "9/27/2021",
    },
  ]);
  
  return (
    <div className={color ? "main-sec dark-mode" : "main-sec light-mode"}>
      <div className="container">
        <input
          type="text"
          className="input-field"
          placeholder="Seacrh any notes"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Card card={card} setCard={setCard}/>
    </div>
  );
}

export default Main;
