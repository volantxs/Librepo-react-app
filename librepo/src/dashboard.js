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

  const [XP, setXP] = useState([]);
    const fetchPost = async () => {
        try {
          const q = query(collection(db, "Book Data"));
          const doc = await getDocs(q);
          const data = doc.docs[0].data();
          setXP(data.XP);
        } catch (err) {
          console.error(err);
          alert("Error: Can't fetch Xp data");
        }
       
    }
    useEffect(()=>{
      fetchPost();
    }, [])
  return (
    <>
    <nav className="navbar navbar-light bg-black">
      <div className="container-fluid">
      <span className="text-light h1">{name}<small className="text-secondary h5"> @Librepo</small>
      </span>

  <button className="btn btn-danger rounded-pill" onClick={logout}>Logout
         </button> 
  </div> 
    </nav>
    <div className='container mt-4 text-center' >
  
    <p className="font-weight-light text-secondary">Toy Version 1.0</p>
    <h1 className="mb-3">Add to collection</h1>
     <div className="w-50 container text-center"><Xperience /></div>
    </div>
    {/* <div className="jumbotron bg-dark">
       <div className="text-center text-light">
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
       </div>
     </div> */}
     <div class="jumbotron fixed-bottom navbar-dark bg-black p-3">
           <div className="text-center text-light">
            Always logout of your Lib.Vault 
            </div>
    </div>
    </> 
  );
}
export default Dashboard;