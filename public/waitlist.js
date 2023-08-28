// Initialize Firebase(2)
const firebaseConfig = {
    apiKey: "AIzaSyCHSG2DeMvetR7PnXdeyzrELkw8fJXwOh0",
    authDomain: "librepo-erevald.firebaseapp.com",
    projectId: "librepo-erevald",
    storageBucket: "librepo-erevald.appspot.com",
    messagingSenderId: "184976154092",
    appId: "1:184976154092:web:2dacf8b6923c113ccb74c9"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
function waitlist() {
  const [email, setEmail] = useState("");
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  //Join waitlist
  const waitlist = () => {
  try {
    if (!email) {
      alert("Please enter your email");
    }
    if (email) {
        addDoc(collection(db, "waitlist"), {
          email: email,
      });
      }
  } catch (err) {
      console.error(err);
      alert(err.message);
  }
};
}

































  //Reference for form collection(3)
  let formMessage = firebase.database().ref('waitlist');
  
  //listen for submit event//(1)
  document
    .getElementById('joinWaitlist')
    .addEventListener('submit', formSubmit);
  
  //Submit form(1.2)
  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let email = document.querySelector('#email').value;
  
    //send message values
    sendMessage(email);
  
    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';
  
    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 7000);
  
    //Form Reset After Submission(7)
    document.getElementById('joinWaitlist').reset();
  }
  
  //Send Message to Firebase(4)
  
  function sendMessage(email) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      email: email,
    });
  }