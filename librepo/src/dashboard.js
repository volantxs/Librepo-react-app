import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Xperience from "./component/xperience";
function Dashboard() {
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setEmail(data.email);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  const [XP, setXP] = useState([]);
    const fetchPost = async () => {
        try {
          const q = query(collection(db, "Book Data"), where("email", "==", email));
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs;
          const totalXP = data.reduce(function(cnt,o){ return cnt + o.data().XP; }, 0);
          setXP(totalXP);
        } catch (err) {
          console.error(err);
          alert("Error: Can't fetch XP data");
        }
    }
    useEffect(() => {
      if (loading) return (
        <div>
          <h1>loading.....</h1>
        </div>
      );
      fetchUserName();
      fetchPost();
    }, [user, loading]);

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
  <button className="btn btn-light rounded-pill" onClick={logout}>Logout
         </button> 
  </div>
    </nav>
    <div className='container mt-4 text-center' >
    <p className="lead">Toy Version 1.0</p>
    <h1 className="mb-3">Add to collection</h1>
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