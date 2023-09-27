var modal = document.getElementById("modal");
var importOpenBtn = document.getElementById("modalBtn");
var importBookBtn = document.getElementById("addBook")
var span = document.getElementsByClassName("close")[0];
var searchInput = document.getElementById("searchBar")
var query = ''
var URL = ''

importOpenBtn.onclick = function() {
  modal.style.display = "flex";
}

importBookBtn.onclick = () => {
  query = searchInput.value;
  searchInput.value = '';
  URL = 'https://www.googleapis.com/books/v1/volumes?q=' + query;
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