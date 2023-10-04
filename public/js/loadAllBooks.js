import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
import  {db}  from "./firebase";
import { ReverseSubtractEquation } from "three";

var URL = '';
const querySnapshot = await getDocs(collection(db, "imported"));

var themes = ['fire', 'water', 'air', 'earth']
var random_theme = themes[(Math.floor(Math.random() * themes.length))]

querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
  var vault = doc.data().vaultName;
  var book = doc.data().bookName;
  var id = doc.id;
  // doc.data() is never undefined for query doc snapshots
    const chosenVault = document.getElementById(vault);
    URL = 'https://www.googleapis.com/books/v1/volumes?q=' + book + '&key=AIzaSyBmSE_tFFrraFhotpwPc8Vc4zMFEHL9zN8';
    $.ajax({
      url: URL.toString(),
      dataType: 'json',
      success: (data) => {
      var newBookNode = document.createElement('div');
      newBookNode.className = "col-md-2 box p-2 m-3" ;
      // img element
      var newBookImg = document.createElement('img');
      try{
      newBookImg.src = data.items[0].volumeInfo.imageLinks.smallThumbnail;
      } catch(e) {
        alert("No Image found for the book");
      }
      newBookImg.className = "img-fluid mx-auto d-block rounded m-3 img-shadow"
      newBookImg.style.width ="100px";
      newBookImg.style.height ="160px";
      newBookNode.appendChild(newBookImg);
      // button element
      var newBookBtn = document.createElement('button');
      newBookBtn.className="btn btn-book"
      newBookBtn.value = data.items[0].volumeInfo.pageCount;
      newBookBtn.innerHTML = data.items[0].volumeInfo.title;
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
      }
    })
  }
);

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

window.onclick = function(event) {
  if (event.target == document.getElementById("myChart")) {
    document.getElementById("myChart").style.display = "flex";
  }
}
