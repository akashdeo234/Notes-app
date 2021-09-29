import React from "react";
import "./_signUp.scss";
import 'firebase/compat/auth';
import {firebase} from '../../firebase/firebase'
import { useHistory } from "react-router";

const SignUp = () => {
    const history = useHistory();
    const signInWithGoogle =(e) =>{
        e.preventDefault();
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((res)=>{
            console.log(res.user)
        }).catch((err)=>{
            console.log(err)
        })
        .then(()=>{
            history.push('/')
        })
    }
  return (
    <div className="signup">
      <div className="container">
        <h1>SignUp</h1>
        <button className="btn" onClick={signInWithGoogle}>
          SIGN UP WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
