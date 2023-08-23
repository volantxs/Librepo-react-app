import React, { useState, Fragment, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where, addDoc } from "firebase/firestore";
import Form from "./form";
import Table from "./table";
import { useNavigate } from "react-router-dom";


function Xperience() {
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const fetchUserEmail = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setEmail(data.email);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user email in XP.js ");
    }
  };
  useEffect(() => {
    if (loading) return;
    fetchUserEmail();
  }, [user, loading]);
  const [tableData, setTableData] = useState([]);
  const [formObject, setFormObject] = useState({
    bookName: "",
    bookPages: "",
    xp: "",
    email,
  });
  const onValChange = (event) => {
    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    setFormObject(value);
    formObject.xp = Math.ceil(parseInt(formObject.bookPages)*7);
  };
  const onFormSubmit = async (event) => {
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      try {
        const docRef = await addDoc(collection(db, "Book Data"),  {
                Book: formObject.bookName,
                Pages: formObject.bookPages,
                XP: formObject.xp,
                email,
            });
        alert("Book data sent!");
        setTableData(dataObj);
       
        const isEmpty = { bookName: "", bookPages: "", xp: "" };
        setFormObject(isEmpty);
      } catch (err) {
            console.error(err);
            alert(err.message);
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