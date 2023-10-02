import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
import  {db}  from "./firebase";

const querySnapshot = await getDocs(collection(db, "imported"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});