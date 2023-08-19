import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Profile from "./component/profile";
function Dashboard() {
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <>
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
      <span className="navbar-brand mb-0 h1 text-light">Librepo @ {name}</span>
      <button className="btn btn-warning" onClick={logout}>Logout
         </button>
      </div>   
    </nav>
    <div className='container mt-5'>
      <h1>Librepo</h1>
      <Profile />
    </div>
    <div className="jumbotron-fluid bg-dark">
       <div className="text-center text-light">
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
       </div>
     </div>
    </> 
  );
}
export default Dashboard;