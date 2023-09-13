const frightXP = document.getElementById('frightXP');
const joyXP = document.getElementById('joyXP');
const sorrowXP = document.getElementById('sorrowXP');
const wisdomXP = document.getElementById('wisdomXP');
const reset = document.getElementById('reset');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const air = document.getElementById('air');
const fire = document.getElementById('fire');

// progressBar.style.visibility = 'hidden'
// var txp = parseInt(localStorage.getItem('txp')) ? parseInt(localStorage.getItem(('txp'))) : 0 ;
var fxp = parseInt(localStorage.getItem('fxp')) ? parseInt(localStorage.getItem(('fxp'))) : 0 ;
var jxp = parseInt(localStorage.getItem('jxp')) ? parseInt(localStorage.getItem(('jxp'))) : 0 ;
var sxp = parseInt(localStorage.getItem('sxp')) ? parseInt(localStorage.getItem(('sxp'))) : 0 ;
var wxp = parseInt(localStorage.getItem('wxp')) ? parseInt(localStorage.getItem(('wxp'))) : 0 ;
// totalXP.innerHTML = txp;
// crimeXP.innerHTML = cxp;
// mushyXP.innerHTML = mxp;
// funXP.innerHTML = fxp;
// wiseXP.innerHTML = wxp;
frightXP.style.width = fxp + "px";
joyXP.style.width = jxp + "px";
wisdomXP.style.width = wxp + "px";
sorrowXP.style.width = sxp + "px";
totalxp = fxp + jxp + sxp + wxp + "vw";
var delay = 10;
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

// calculate individual XP
function getXP(bookID) {
    var book = document.getElementById(bookID);
    var pages = parseInt(book.value);
   
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

    // txp += cxp + wxp + fxp + mxp;
    // totalXP.innerHTML = txp;
    frightXP.style.width = fxp + "px";
    joyXP.style.width = jxp + "px";
    wisdomXP.style.width = wxp + "px";
    sorrowXP.style.width = sxp + "px";
    // crimeXP.innerHTML = cxp;
    // mushyXP.innerHTML = mxp;
    // funXP.innerHTML = fxp;
    // wiseXP.innerHTML = wxp;

    // localStorage.setItem('txp', JSON.stringify(txp))
    localStorage.setItem('fxp', JSON.stringify(fxp))
    localStorage.setItem('jxp', JSON.stringify(jxp))
    localStorage.setItem('sxp', JSON.stringify(sxp))
    localStorage.setItem('wxp', JSON.stringify(wxp))
}
reset.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
})


