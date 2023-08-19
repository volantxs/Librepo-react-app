import React, { useState, Fragment } from "react";
import Form from "./form";
import Table from "./table";
import { addDoc, collection } from "firebase/firestore";
import { db }  from "../firebase";
function Profile() {
  const [tableData, setTableData] = useState([]);
  const [formObject, setFormObject] = useState({
    bookName: "",
    bookPages: "",
    profile: "",
  });
  const onValChange = (event) => {
    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    setFormObject(value);
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
                Profile: formObject.profile
            });
        alert("Book data sent!");
        setTableData(dataObj);
        const isEmpty = { bookName: "", bookPages: "", profile: "" };
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
export default Profile;