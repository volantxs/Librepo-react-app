import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Xperience from "./component/xperience";


function Dashboard() {
  const [XP, setXP] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setName(user.displayName);
        setEmail(user.email);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (email) {
      fetchPost();
    }
  }, [email]);


  const fetchPost = async () => {
        try {
          const q = query(collection(db, "Book Data"), where("email", "==", email));
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs;
          const totalXP = data.reduce((cnt,o) => cnt + o.data().XP, 0);
          setXP(totalXP);
        } catch (err) {
          console.error(err);
          alert(err.message + " ---dashboard--fetchPost");
        }
    }

  
  return (
    <>
    <nav className="navbar navbar-light bg-black">

      <div className="d-flex col-sm-3">
    <span className="h3 mt-2 text-light p-2">RXP: {XP}</span>
  </div> 

    <div className="d-flex col-sm-3">
      <span className="text-light h1 ">{name}<small className="lead text-secondary">#Librepo</small>
      </span>
      </div>
    
  <div className="d-flex p-2">
  <button className="btn btn-light rounded-pill" onClick={logout}>Logout</button> 
  </div>
    </nav>
    <div className='container mt-4 text-center' >
    <p className="lead">Toy Version 1.0</p>
    <h1 className="mb-3">Add to collection </h1>
     <div className="w-50 container"><Xperience /></div>
    </div>
     <div class="jumbotron fixed-bottom navbar-dark bg-black p-3">
           <div className="text-center text-light">
            Always logout of your Lib.Vault 
            </div>
    </div>
    </> 
  );

}
export default Dashboard;