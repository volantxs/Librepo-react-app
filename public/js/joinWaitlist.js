import  {db}  from "./firebase";
import { addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js'

document.getElementById('joinWaitlist').addEventListener('submit', formSubmit);
  function formSubmit(e) {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    sendMessage(email);
  document.getElementById('joinWaitlist').reset();
  }
  function sendMessage(email) {
        const docRef = addDoc(collection(db, "waitlist"),  {
                email: email,
            });
       alert("Joined Librepo(beta) waitlist" + docRef)
          document.getElementById('joinWaitlist').reset();
    }
    