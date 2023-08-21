import React, { useState } from "react";
import "./home.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

function Home() {
  const [email, setEmail] = useState("");

  //Join waitlist
  const waitlist = () => {
  try {
    if (!email) {
      alert("Please enter your email");
    }
    if (email) {
        addDoc(collection(db, "waitlist"), {
          email: email,
      });
      }
  } catch (err) {
      console.error(err);
      alert(err.message);
  }
};
    return (
      <>
      <nav className="navbar navbar-light">
        <div className="container-fluid justify-content-start p-2">
              <a className="btn btn-width bg-black text-light rounded-pill" href="./register" role="button">New Reader</a>
              <span className="h6 text-light">Lib</span>
              <a className="btn btn-width bg-black text-light rounded-pill" href="./login" role="button">Log in</a>
        </div> 
      </nav>
    <div className="jumbotron">
      <div className="p-5"></div>
      <div className= "mt-5  text-center ">
        <h1 className="">Librepo</h1>
        <p className="lead mt-2 text-secondary">Hubspot for all your loved books v1.0</p>
      </div> 
      </div>
      <div className="waitlist">
      <div className="waitlist__container rounded">
        <div className="input-group">
          <input 
          type="email"
          name="email"
          className="form-control rounded-pill"
          onClick={(e) => setEmail(e.target.value)}
          placeholder="Join waitlist"
          /> <div className="text-light">Lib</div>
          <div className="input-group-append ">
            <button 
              type="submit"
              className="btn btn-dark rounded-pill" onClick={waitlist}> Join
            </button>
          </div>
          </div>
        </div>  
        </div>
      
      <div class="fixed-bottom navbar-dark bg-black p-3">
          <div className="jumbotron text-center">
          <a class="navbar-brand" href="https://github.com/volantxs/Librepo-react-app">Quick Link to Github repo</a>
          </div>
      </div>
        
      </>
    );
}
export default Home;