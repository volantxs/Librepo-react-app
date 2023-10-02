import  {db}  from "./firebase";
import { addDoc, collection } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js'

var formImport = document.getElementById("importBook");
var dropdown = document.getElementById("dropdownVault");

formImport.onsubmit = (e) => {
    e.preventDefault();
    var book = document.getElementById("searchBar").value;
    var vault = dropdown.options[dropdown.selectedIndex].value;
    submitBookInfo(book, vault);
    document.getElementById("modal").style.display = 'none'
    document.getElementById("addedAlert").style.display = "flex"
    setTimeout(() => {
      document.getElementById("addedAlert").style.display = "none" }, 2000)
}
async function submitBookInfo(book, vault) {
    try {
      const docRef = await addDoc(collection(db, 'imported'), {
        bookName: book,
        vaultName: vault,
      });
      console.log("sent the book" + docRef.id)
    } catch(e) {
      alert(e.message + "Couldn't send the book to cloud");
    }
  }

  
