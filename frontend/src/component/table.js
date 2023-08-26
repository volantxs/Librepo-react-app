import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";



function Table() {
    const [books, setBooks] = useState([]);
    const user = auth.currentUser;
    const email = user ? user.email : ''; // Check if user is not null before accessing email
    const q = query(collection(db, "Book Data"), where("email", "==", email));
    useEffect(() => {
      if (user) { // Check if user is not null before proceeding
        const q = query(collection(db, "Book Data"), where("email", "==", email));
        const fetchBook = async () => {
          try {
            const querySnapshot = await getDocs(q);
            const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setBooks(newData);
            console.log(newData);
          } catch (err) {
            console.error(err);
            alert(err.message + " ---table--fetchBook");
          }
        };
  
        fetchBook();
      }
    }, [user, email]);


    return (
      <>
      <table className="table text-center mt-5 mb-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Book</th>
            <th>Pages</th>
            <th>Book XP</th>
            {/* <th>email</th> */}
          </tr>
        </thead>
        <tbody>
          {books.map((doc, id) => {
            return (
              <tr key={id}>
                <td>{id+1}</td>
                <td>{doc.Book}</td>
                <td>{doc.Pages}</td>
                <td>{doc.XP}</td>
                {/* <td>{email}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
    );
  }
  export default Table;