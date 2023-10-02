// getting all required elements
const frightXP = document.getElementById('frightXP');
const joyXP = document.getElementById('joyXP');
const sorrowXP = document.getElementById('sorrowXP');
const wisdomXP = document.getElementById('wisdomXP');
const reset = document.getElementById('reset');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const air = document.getElementById('air');
const fire = document.getElementById('fire');
// getting saved XPs
var fxp = parseInt(localStorage.getItem('fxp')) ? parseInt(localStorage.getItem(('fxp'))) : 0 ;
var jxp = parseInt(localStorage.getItem('jxp')) ? parseInt(localStorage.getItem(('jxp'))) : 0 ;
var sxp = parseInt(localStorage.getItem('sxp')) ? parseInt(localStorage.getItem(('sxp'))) : 0 ;
var wxp = parseInt(localStorage.getItem('wxp')) ? parseInt(localStorage.getItem(('wxp'))) : 0 ;
//  getting all XP data
var fxp_arr= JSON.parse(localStorage.getItem('fxp_arr')) ? JSON.parse(localStorage.getItem('fxp_arr')) : [] ;
var sxp_arr= JSON.parse(localStorage.getItem('sxp_arr')) ? JSON.parse(localStorage.getItem('sxp_arr')) : [] ;
var jxp_arr= JSON.parse(localStorage.getItem('jxp_arr')) ? JSON.parse(localStorage.getItem('jxp_arr')) : [] ;
var wxp_arr= JSON.parse(localStorage.getItem('wxp_arr')) ? JSON.parse(localStorage.getItem('wxp_arr')) : [] ;
// converting xp to pixels
frightXP.style.width = fxp + "px";
joyXP.style.width = jxp + "px";
wisdomXP.style.width = wxp + "px";
sorrowXP.style.width = sxp + "px";
// mouse hover conditions for gifs
frightXP.onmouseenter = function () {
    fire.style.display = 'flex'
}
frightXP.onmouseleave = function () {
    fire.style.display = 'none';
}
joyXP.onmouseenter = function () {
    earth.style.display = 'flex'
}
joyXP.onmouseleave = function () {
    earth.style.display = 'none';
}
sorrowXP.onmouseenter = function () {
    air.style.display = 'flex'
}
sorrowXP.onmouseleave = function () {
    air.style.display = 'none';
}
wisdomXP.onmouseenter = function () {
    water.style.display = 'flex'
}
wisdomXP.onmouseleave = function () {
    water.style.display = 'none';
}
// calculate individual XP for books
export function getXP(bookID, value) {
    var book = document.getElementById(bookID);
    console.log(book)
    if (value != null) {
        var pages  = parseInt(value);
    } else {
        var pages = parseInt(book.value);
    }
   
     if (book.name == "fright") {
        fxp += (Math.round(pages/100))*10;
        sxp += (Math.round(pages/250))*10;
        wxp += (Math.round(pages/500))*10;
        jxp += (Math.round(pages/750))*10;
    }
    if (book.name == "joy") {
        jxp += (Math.round(pages/100))*10;
        wxp += (Math.round(pages/250))*10;
        // fxp += (Math.round(pages/200))*10;
        sxp += (Math.round(pages/750))*10;

    }
    if (book.name == "sorrow") {
        sxp += (Math.round(pages/1000))*10;
        wxp += (Math.round(pages/250))*10;
        fxp += (Math.round(pages/500))*10;
        jxp += (Math.round(pages/750))*10;
    }
    if (book.name == "wisdom") {
        wxp += (Math.round(pages/100))*10;
        jxp += (Math.round(pages/250))*10;
        sxp += (Math.round(pages/500))*10;
        fxp += (Math.round(pages/750))*10;
    }

    frightXP.style.width = fxp + "px";
    joyXP.style.width = jxp + "px";
    wisdomXP.style.width = wxp + "px";
    sorrowXP.style.width = sxp + "px";
// storing new book's XP data into localstorage
    localStorage.setItem('fxp', JSON.stringify(fxp))
    localStorage.setItem('jxp', JSON.stringify(jxp))
    localStorage.setItem('sxp', JSON.stringify(sxp))
    localStorage.setItem('wxp', JSON.stringify(wxp))
    dataXP(fxp, wxp, sxp, jxp)
}
// button to reset saved local storage
reset.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
})
// dataset for all XPs
function dataXP(fxp, wxp, sxp, jxp) {
    fxp_arr.push(fxp);
    sxp_arr.push(sxp);
    wxp_arr.push(wxp);
    jxp_arr.push(jxp);
    localStorage.setItem("fxp_arr" , JSON.stringify(fxp_arr));
    localStorage.setItem("sxp_arr" , JSON.stringify(sxp_arr));
    localStorage.setItem("wxp_arr" , JSON.stringify(wxp_arr));
    localStorage.setItem("jxp_arr" , JSON.stringify(jxp_arr));
}
