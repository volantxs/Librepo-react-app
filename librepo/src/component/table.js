import React, { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase';

function Table() {
    const [books, setBooks] = useState([]);
    const fetchPost = async () => {
        const response = await getDocs(collection(db, "Book Data"))
            .then((querySnapshot)=>{               
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
      <table className="table mt-5 mb-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Book</th>
            <th>Pages</th>
            <th>Book XP</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  export default Table;