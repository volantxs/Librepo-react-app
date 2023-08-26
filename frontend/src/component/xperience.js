import React, { useState, Fragment, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where, addDoc } from "firebase/firestore";
import Form from "./form";
import Table from "./table";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";


function Xperience() {
  const [email, setEmail] = useState(""); 
  useEffect(() => {
    if (auth.currentUser) {
      // Update 'email' state only when auth.currentUser is available
      setEmail(auth.currentUser.email);
    }
  }, []);
  const [tableData, setTableData] = useState([]);
  const [formObject, setFormObject] = useState({
    bookName: "",
    bookPages: "",
    xp: "",
    email,
  });
  const onValChange = (event) => {
    const value = {
      ...formObject,
      [event.target.name]: event.target.value,
    };
    value.xp = Math.ceil(parseInt(formObject.bookPages)*7);
    setFormObject(value);
  };
  const onFormSubmit = async (event) => {
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      try {
        const docRef = await addDoc(collection(db, "Book Data"),  {
                Book: formObject.bookName,
                Pages: formObject.bookPages,
                XP: formObject.xp,
                email,
            });
        alert("Book data sent!");
        // setTableData(dataObj);
       
        const isEmpty = { bookName: "", bookPages: "", xp: "" };
        setFormObject(isEmpty);
      } catch (err) {
            console.error(err);
            alert(err.message + " ---xperience--Onform submit");
        }
    }
  };
 
  
  return (
    <Fragment>
      <Form
        onValChange={onValChange}
        formObject={formObject}
        onFormSubmit={onFormSubmit}
      />
      <Table tableData={tableData} />
    </Fragment>
  );
}

export default Xperience;