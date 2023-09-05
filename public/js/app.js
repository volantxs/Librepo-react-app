import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js'
import { addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js'
const firebaseConfig = {
apiKey: "API_KEY",
authDomain: "AUTH_DOMAIN",
projectId: "PROJECT_ID",
storageBucket: "STORAGE_BUCKET",
messagingSenderId: "MESSAGING_SENDER_ID",
appId: "APP_ID"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
       alert("Joined Librepo(beta) waitlist")
        
 //Form Reset After Submission
          document.getElementById('joinWaitlist').reset();
        // setTableData(dataObj);
      
    }
    