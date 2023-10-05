import { addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';
import  { db }  from "./firebaseConfig.js";

document.getElementById('joinWaitlist').onsubmit = (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    sendMessage(email);
  document.getElementById('joinWaitlist').reset();
  }

  function sendMessage(email) {
        const docRef = addDoc(collection(db, "waitlist"),  {
                email: email,
            });
       alert("Joined Librepo(beta) waitlist w/ " + email)
    }
    