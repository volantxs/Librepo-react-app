const addBookBtn = document.getElementById("addBook");
let themes = ['fright', 'wisdom', 'sorrow', 'joy']
random_theme = themes[(Math.floor(Math.random() * themes.length))]
var btnID = parseInt(localStorage.getItem("newBtnID")) ? parseInt(localStorage.getItem("newBtnID")) : 16 ; 

function addBook(bookVaultIn, bookNameIn, btnID, bookPagesIn) {
//     if (btnID > 15) {
//     for (var i = 15; i < btnID; i++) {
//         bookObj = JSON.parse(localStorage.getItem(btnID))
//         let node = document.getElementById(bookObj.bookVault);
//         // create div element
//         let newBook = document.createElement('div');
//         newBook.setAttribute('class', 'col-md-2 box p-2 m-3')
//         // create img element
//         let newBookImg = document.createElement('img')
//         newBookImg.setAttribute('class', 'img-fluid mx-auto d-block rounded m-3 img-shadow')
//         newBookImg.setAttribute('style', 'width: 100px; height: 160px;')
//         newBookImg.setAttribute('src', 'https://m.media-amazon.com/images/I/41wjnFxdxnL.jpg')
//         // create button element
//         let newBookBtn = document.createElement('button')
//         newBookBtn.setAttribute('class', 'btn btn-book')
//         newBookBtn.setAttribute('id', bookObj.btnID)
//         newBookBtn.setAttribute('onclick', "getXP(this.id)")
//         newBookBtn.setAttribute('value', bookObj.bookPagesIn)
//         newBookBtn.setAttribute('name', random_theme);
//         newBookBtn.innerHTML= bookObj.bookNameIn;
//         newBook.appendChild(newBookImg);
//         newBook.appendChild(newBookBtn);
//         try {
//             node.appendChild(newBook);
//         } catch(err) {
//             alert(err.message + "itsss hereee");
//         }
// }
// } else {
        let node = document.getElementById(bookVaultIn);
        // create div element
        let newBook = document.createElement('div');
        newBook.setAttribute('class', 'col-md-2 box p-2 m-3')
        // create img element
        let newBookImg = document.createElement('img')
        newBookImg.setAttribute('class', 'img-fluid mx-auto d-block rounded m-3 img-shadow')
        newBookImg.setAttribute('style', 'width: 100px; height: 160px;')
        newBookImg.setAttribute('src', 'https://m.media-amazon.com/images/I/41wjnFxdxnL.jpg')
        // create button element
        let newBookBtn = document.createElement('button')
        newBookBtn.setAttribute('class', 'btn btn-book')
        // newBookBtn.setAttribute('style', 'width: 50px; height: 20px')
        newBookBtn.setAttribute('id', btnID)
        newBookBtn.setAttribute('onclick', "getXP(this.id)")
        newBookBtn.setAttribute('value', bookPagesIn)
        newBookBtn.setAttribute('name', random_theme);
        newBookBtn.innerHTML = bookNameIn;
        newBook.appendChild(newBookImg);
        newBook.appendChild(newBookBtn);
        try {
            node.appendChild(newBook);
           
        } catch(err) {
            alert(err.message )+ "and this doomed ";
        }
        try {
               // alert(bookVaultIn)
               var bookObj = {
                "bookVault": bookVaultIn, 
                "bookNameIn": bookNameIn,
                "bookPagesIn": bookPagesIn,
                "btnID": btnID
            }
            localStorage.setItem(JSON.stringify(btnID), JSON.stringify(bookObj))

        } catch(err) {
            alert(err.message + "adding book obj");

        }
}

addBookBtn.addEventListener("click", function () {
    try {
        var bookVaultIn = document.getElementById("bookVault").value;
        var bookNameIn = document.getElementById("bookName").value;
        var bookPagesIn = document.getElementById("bookPages").value;
        addBook(bookVaultIn, bookNameIn, btnID, bookPagesIn);
        // btnID++
        // localStorage.setItem("newBtnID", JSON.stringify(btnID))
    } catch (err) {
        alert(err.message + "event listen");
    }

})
