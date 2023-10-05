import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';

const firebaseConfig = {
apiKey: "AIzaSyCHSG2DeMvetR7PnXdeyzrELkw8fJXwOh0",
authDomain: "librepo-erevald.firebaseapp.com",
projectId: "librepo-erevald",
storageBucket: "librepo-erevald.appspot.com",
messagingSenderId: "184976154092",
appId: "1:184976154092:web:2dacf8b6923c113ccb74c9"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {db} ;