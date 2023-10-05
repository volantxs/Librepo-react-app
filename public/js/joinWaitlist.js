import { addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';
import  { db }  from "./firebaseConfig.js";

document.getElementById('joinWaitlist').onsubmit = (e) => {
    e.preventDefault();
    const email = document.querySelector("#feedback").value;
    sendMessage(email);
  document.getElementById('joinWaitlist').reset();
  }

  function sendMessage(email) {
        const docRef = addDoc(collection(db, "feedback"),  {
                feedback: email,
            });
       alert("Thank you for your feedback!")
    }
    