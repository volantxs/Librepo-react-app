import { getXP } from "./getXP";

var modal = document.getElementById("modal");
var openImportModal = document.getElementById("openImportModal");
var importBookBtn = document.getElementById("addBook")
var span = document.getElementsByClassName("close")[0];
var searchInput = document.getElementById("searchBar")
var bookBtns = document.querySelectorAll(".btn-book")
var imgBtn = document.querySelectorAll(".img-shadow")
var tooltip = document.getElementById("tooltip");
var dropdown = document.getElementById("dropdownVault");
var query = ''
var URL = ''
var googleKey = 'AIzaSyBmSE_tFFrraFhotpwPc8Vc4zMFEHL9zN8'
var bookName;
var bookID;
var vault;

var themes = ['fright', 'wisdom', 'sorrow', 'joy']
var random_theme = themes[(Math.floor(Math.random() * themes.length))]

openImportModal.onclick = function() {
  modal.style.display = "flex";
}

bookBtns.forEach(occurence => {
  occurence.addEventListener("mouseenter", (e) => {
    bookName = e.target.innerHTML;
    bookID = e.target.id;
    getDescription();
  })
  occurence.addEventListener("mouseleave", (e) => {
    tooltip.innerHTML = '';
    tooltip.style.display ="none";
  })
})

window.addEventListener("click", () => {
  tooltip.style.display = 'none'
})
function ImportBook(vault) {
  const chosenVault = document.getElementById(vault);
  query = searchInput.value;
  URL = 'https://www.googleapis.com/books/v1/volumes?q=' + query + '&key=AIzaSyBmSE_tFFrraFhotpwPc8Vc4zMFEHL9zN8';
  $.ajax({
    url: URL.toString(),
    dataType: 'json',
    success: (data) => {
      console.log("getting data from google/n" + data);
      var newBookNode = document.createElement('div')
      newBookNode.className = "col-md-2 box p-2 m-3" 
      // img element
      var newBookImg = document.createElement('img')
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
      newBookBtn.id = "bookID-" + (new Date()).getTime();
      newBookBtn.name = random_theme;
      try {
      newBookBtn.onclick = getXP(newBookBtn.name, newBookBtn.value) ;
      } catch(e) {
        alert(e.message + " Couldn't get the XP of the book");
      }
      newBookNode.appendChild(newBookBtn);
      chosenVault.appendChild(newBookNode);
    }
  })

}

function getDescription() {
  query = bookName;
  // alert(typeof(query))
  tooltip.style.display = "block"
  tooltip.innerHTML = "Loading..."
  URL = 'https://www.googleapis.com/books/v1/volumes?q=' + query + '&key=AIzaSyBmSE_tFFrraFhotpwPc8Vc4zMFEHL9zN8';
  $.ajax({
    url: URL.toString(),
    dataType: 'json',
    success: (data) => {
      const getData = data.items[0].volumeInfo.description;
      tooltip.innerHTML = getData;
    }
  })
  bookName ='';
}

importBookBtn.onclick = () => {
  try {
    vault = dropdown.options[dropdown.selectedIndex].value;
    ImportBook(vault);
  } catch(e) {
    alert(e.message)
  }
}

searchInput.onkeydown = (e) => {
  if (e.key === "Enter") {
    try {
      vault = dropdown.options[dropdown.selectedIndex].value;
      ImportBook(vault);
    } catch(e) {
      alert(e.message);
    }
  }
  
}


span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
