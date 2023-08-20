import React from "react";
// import logo from "librepo.png"
import "./home.css";
// console.log(logo);
function Home() {
  return (
    <>
    <nav className="navbar navbar-light">
      <div className="container-fluid flex-row justify-content-start p-2">
            <a className="btn btn-width bg-black text-light rounded-pill" href="./register" role="button">New Reader</a>
            <span className="h6 text-light">Lib</span>
            <a className="btn btn-width bg-black text-light rounded-pill" href="./login" role="button">Log in</a>
      </div>   
    </nav>
    <div className="jumbotron">
    <div className= "mt-5 text-center ">
            <span className="fs-1">
                Librepo
            </span>
            <p className="lead mt-2 text-secondary">Hubspot for all your loved books v1.0</p>
        </div>    
    </div>
    <div class="jumbotron text-center">
    <div class="row text-light">
      <div class="col-sm-4 bg-black  ">
        Pre-loved ones
      </div>
      <div class="col-sm-4 bg-secondary ">
        Reread ones
      </div>
      <div class="col-sm-4 bg-violet ">
        Nostalgic Ones
      </div>
    </div>
  </div>
    
    <div class="fixed-bottom navbar-dark bg-secondary p-3">
        <div className="jumbotron text-center">
        <a class="navbar-brand" href="https://github.com/volantxs/Librepo-react-app">Quick Link to Github repo</a>
        </div>
    </div>
      
    </>
  );
}
export default Home;