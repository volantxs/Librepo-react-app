import React from "react";
// import logo from "librepo.png"
import "./home.css";
// console.log(logo);
function Home() {
  return (
    <>
    <nav className="navbar navbar-light">
      <div className="container-fluid flex-row justify-content-start p-2">
            <a className="btn bg-dark text-light rounded-pill" href="./register" role="button">New Reader</a>
            <span className="h6 text-light">Lib</span>
            <a className="btn bg-dark text-light rounded-pill" href="./login" role="button">Log in</a>
      </div>   
    </nav>
    <div className="jumbotron">
    <div className= " mt-5 text-center ">
            <span className=" h1">
                Librepo
            </span>
            <p className="lead mt-2 text-secondary">This is the toy version 1.0</p>
        </div>    
    </div>
    
    <nav class="navbar fixed-bottom navbar-dark bg-black">
        <div className="container-fluid">
        <a class="navbar-brand" href="">Quick Link</a>
        </div>
    </nav>
      
    </>
  );
}
export default Home;