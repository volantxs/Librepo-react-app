import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
import  { db }  from "./firebase";
import { getDescription } from "./modal";

const querySnapshot = await getDocs(collection(db, "imported"));

var themes = ['fire', 'water', 'air', 'earth']
var random_theme = themes[(Math.floor(Math.random() * themes.length))]

const getButtonState = function (btn) {
  if (localStorage.getItem(btn.id) == 'disabled') {
    btn.disabled = true
    btn.innerHTML = 'completed';
    btn.style.color = 'blue'
    progressBar.style.visibility = 'visible'
    return true;
  } else {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      btn.disabled = true
      window.localStorage.setItem(btn.id, 'disabled')
      btn.innerHTML = 'completed';
      btn.style.color = 'blue'
     })
  }
};

querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
  var vault = doc.data().vaultName;
  var bookTitle = doc.data().bookTitle;
  try{
  var bookImg = doc.data().bookImg;
  } catch(e) {
  alert("No Image found for the book");
  }
  var bookPageCount = doc.data().bookPageCount;
  var id = doc.id;
  const chosenVault = document.getElementById(vault);
  var newBookNode = document.createElement('div');
  newBookNode.className = "col-md-2 box p-2 m-3" ;
  // img element
  var newBookImg = document.createElement('img');
  newBookImg.src = bookImg;

  newBookImg.className = "img-fluid mx-auto d-block rounded m-3 img-shadow"
  newBookImg.style.width ="100px";
  newBookImg.style.height ="160px";
  newBookNode.appendChild(newBookImg);
  // button element
  var newBookBtn = document.createElement('button');
  newBookBtn.className="btn btn-book"
  newBookBtn.value = bookPageCount;
  newBookBtn.innerHTML = bookTitle;
  newBookBtn.id = id;
  newBookBtn.name = random_theme;
  newBookBtn.disabled = getButtonState(newBookBtn);
  try {
    newBookBtn.onclick = (e) => { getXP(e); disableButton(e);}
  } catch(e) {
    alert(e.message + " Couldn't get the XP of the book");
  }
  try{
    newBookBtn.onmouseenter = (e) => getDescription(e);
    newBookBtn.onmouseleave = () => tooltip.style.display = 'none';
  } catch(e) {
    alert("Could't get the description")
  }
  newBookNode.appendChild(newBookBtn);
  chosenVault.appendChild(newBookNode);
  })



window.onclick = function(event) {
  if (event.target == document.getElementById("myChart")) {
    document.getElementById("myChart").style.display = "flex";
  }
}

