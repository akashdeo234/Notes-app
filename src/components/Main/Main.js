import React, { useContext } from "react";
import { colorMoodContext } from "../../Context/Context";
import "./_main.scss";
function Main() {
    /* color context state and styles */
    const {color,setColor} = useContext(colorMoodContext);
    const darkMode = {
        backgroundColor : '#171C26',
        color:"#fff"
    }
    const lightMode = {
        backgroundColor : '#fff',
        color:"#171C26"
    }
    //console.log(color,"in main");
  return (
    <div className="main-sec" style={color ? darkMode : lightMode}>
      <div className="container">
        <h1>hello</h1>
      </div>
    </div>
  );
}

export default Main;
