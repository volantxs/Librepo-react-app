import React, { useState, Fragment } from "react";
import Form from "./form";
import Table from "./table";
import { addDoc, collection } from "firebase/firestore";
import { db }  from "../firebase";
function Xperience() {
  const [tableData, setTableData] = useState([]);
  const [formObject, setFormObject] = useState({
    bookName: "",
    bookPages: "",
    xp: "",
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
        const docRef = await addDoc(collection(db, "Book Data"), {
                Book: formObject.bookName,
                Pages: formObject.bookPages,
                XP: formObject.xp
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