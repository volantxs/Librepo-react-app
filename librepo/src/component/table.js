import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from '../firebase';
import { useNavigate } from "react-router-dom";


function Table() {
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const fetchUserEmail = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setEmail(data.email);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/dashboard");
    fetchUserEmail();
  }, [user, loading]);

    const [books, setBooks] = useState([]);
    const q = query(collection(db, "Book Data"), where("email", "==", email));
    const fetchPost = async () => {
        const response = await getDocs(q)
            .then((querySnapshot)=> {               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setBooks(newData);                
                console.log(books, newData);
            })
    }
    useEffect(()=>{
      fetchPost();
    }, [])
    return (
      <>
      <table className="table text-center mt-5 mb-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Book</th>
            <th>Pages</th>
            <th>Book XP</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {books && books.map((doc, id) => {
            return (
              <tr>
                <td>{id+1}</td>
                <td>{doc.Book}</td>
                <td>{doc.Pages}</td>
                <td>{doc.XP}</td>
                <td>{email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
    );
  }
  export default Table;