import { addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';
import  { db }  from "./firebaseConfig.js";

document.getElementById('joinWaitlist').onsubmit = (e) => {
    e.preventDefault();
    const feedback = document.querySelector("#feedback").value;
    sendMessage(feedback);
  document.getElementById('joinWaitlist').reset();
  }

  function sendMessage(feedback) {
        const docRef = addDoc(collection(db, "feedback"),  {
                feedback: feedback,
            });
       alert("Thank you for your feedback!")
    }
    