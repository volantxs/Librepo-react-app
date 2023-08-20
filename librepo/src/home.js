import React from "react";
// import logo from "librepo.png"
import "./home.css";
// console.log(logo);
function Home() {
  return (
    <>
    <nav className="navbar navbar-light">
      <div className="container-fluid flex-row justify-content-start p-2">
            <a className="btn bg-dark text-light rounded-pill" href="./register" role="button"><strong>New Reader</strong></a>
            <span className="h6 text-light">Gem</span>
            <a className="btn bg-dark text-light rounded-pill" href="./login" role="button"><strong>Log in</strong></a>
      </div>   
    </nav>
    <div className="jumbotron">
    <img src={require('./librepo.png')} className="img-fluid max-width" alt="Responsive image"/>
        {/* <div className= " mt-5 text-center ">
            <span className=" h1">
                <strong>Librepo</strong>
            </span>
            <p className="lead mt-2">This is the toy version 1.0</p>
        </div> */}
    </div>    
    <nav class="navbar fixed-bottom navbar-dark bg-dark">
        <div className="container-fluid">
        <a class="navbar-brand" href="">Quick Link</a>
        </div>
    </nav>
      
    </>
  );
}
export default Home;