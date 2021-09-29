import React, { useContext, useEffect, useState } from "react";
import "./_header.scss";
import Switch from "@mui/material/Switch";
import { colorMoodContext, UserContextFun } from "../../Context/Context";
import { Link } from "react-router-dom";
import {firebase} from '../../firebase/firebase'

function Header() {
  const { setColor } = useContext(colorMoodContext); //useContext state for color change
  const [current, setCurrent] = useState(true); // state to get the toogle is true or false
  const { user , setUser } = useContext(UserContextFun);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const colorChange = () => {
    setCurrent(!current);
    //console.log(current)
    setColor(current);
  };
  /*Color styles */
  const darkMode = {
    backgroundColor: "#171C26",
    color: "#fff",
  };
  const lightMode = {
    backgroundColor: "#fff",
    color: "#171C26",
  };
  const toogleTrue = {
      color: "#FEB52C"
  }
  const toogleFalse = {
    color: "#3269FF"
}

useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user);
  })
},[])
  return (
    <div className="header" style={current ? darkMode : lightMode}>
      <div className="container">
        <h1 className="logo">
          <span>N</span>otes
        </h1>
        <div className="toogle-btn">
          <Link to='/signup' className={`${current && "login-btn"} : ${!current && "dark-login-btn"}  `}>
            {user ? user.displayName : 'Login'}
          </Link>
          <Switch {...label} onChange={colorChange} className='btn' style={current ? toogleTrue : toogleFalse } />
        </div>
      </div>
    </div>
  );
}

export default Header;
