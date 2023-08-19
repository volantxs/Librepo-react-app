import React, { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase';

function Table() {
    // const [customerName, setCustomerName] = useState("");
    // const [customerPassword, setCustomerPassword] = useState("");
    const [booksData, setBooksData] = useState([]);
    useEffect(() => {
        db.collection("Book Data").onSnapshot((snapshot) => {
            setBooksData(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
        console.log({ booksData });
    }, []);
    return (
      <table className="table mt-5 mb-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Book</th>
            <th>Pages</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {booksData?.map(({id, data}) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{data.bookName}</td>
                <td>{data.bookPages}</td>
                <td>{data.profile}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  export default Table;