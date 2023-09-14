const addBookBtn = document.getElementById("addBook");
var bookVaultIn = document.getElementById("bookVault").value.trim();
var bookNameIn = document.getElementById("bookName").value.trim();
var bookPagesIn = document.getElementById("bookPages").value.trim();
themes = ['fright', 'wisdom', 'sorrow', 'joy']
random_theme = themes[(Math.floor(Math.random() * themes.length))]
var node = document.getElementById(bookVaultIn)
btnID = parseInt(localStorage.getItem("newBtnID")) ? parseInt(localStorage.getItem("newBtnID")) : 14 ; 
function addBook(node, bookNameIn, btnID, bookPagesIn) {
    // create div element
    var newBook = document.createElement('div');
    newBook.setAttribute('class', 'col-md-2 box p-2 m-3')
    // create img element
    var newBookImg = document.createElement('img')
    newBookImg.setAttribute('class', 'img-fluid mx-auto d-block rounded m-3 img-shadow')
    newBookImg.setAttribute('style', 'width: 100px; height: 160px;')
    newBookImg.setAttribute('src', 'https://m.media-amazon.com/images/I/41wjnFxdxnL.jpg')
    // create button element
    var newBookBtn = document.createElement('button')
    newBookBtn.setAttribute('class', 'btn btn-book')
    newBookBtn.setAttribute('id', btnID)
    newBookBtn.setAttribute('onclick', "getXP(this.id)")
    newBookBtn.setAttribute('value', bookPagesIn)
    newBookBtn.setAttribute('name', random_theme);
    newBookBtn.innerHTML= bookNameIn;
    newBook.appendChild(newBookImg, newBookBtn);
    try {
        node.appendChild(newBook);
    } catch(err) {
        alert(err.message);
    }
}

addBookBtn.addEventListener("click", function () {
    try {
        addBook(node, bookNameIn, btnID, bookPagesIn);
        btnID += 1
        localStorage.setItem("newBtnID", JSON.stringify(btnID))
    } catch (err) {
        alert(err.message);
    }

})
