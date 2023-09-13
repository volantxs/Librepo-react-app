const crimeXP = document.getElementById('crime-xp');
const funXP = document.getElementById('fun-xp');
const mushyXP = document.getElementById('mushy-xp');
const wiseXP = document.getElementById('wise-xp');
const reset = document.getElementById('reset');
// var txp = parseInt(localStorage.getItem('txp')) ? parseInt(localStorage.getItem(('txp'))) : 0 ;
var cxp = parseInt(localStorage.getItem('cxp')) ? parseInt(localStorage.getItem(('cxp'))) : 0 ;
var fxp = parseInt(localStorage.getItem('fxp')) ? parseInt(localStorage.getItem(('fxp'))) : 0 ;
var mxp = parseInt(localStorage.getItem('mxp')) ? parseInt(localStorage.getItem(('mxp'))) : 0 ;
var wxp = parseInt(localStorage.getItem('wxp')) ? parseInt(localStorage.getItem(('wxp'))) : 0 ;
// totalXP.innerHTML = txp;
// crimeXP.innerHTML = cxp;
// mushyXP.innerHTML = mxp;
// funXP.innerHTML = fxp;
// wiseXP.innerHTML = wxp;
crimeXP.style.width = cxp + "%";
funXP.style.width = fxp + "%";
wiseXP.style.width = wxp + "%";
mushyXP.style.width = mxp + "%";

// calculate individual XP
function getXP(bookID) {
    var book = document.getElementById(bookID);
    var pages = parseInt(book.value);
    if (book.name == "crime") {
        cxp += (Math.round(pages/100))*10;
        wxp += (Math.round(pages/150))*10;
        fxp += (Math.round(pages/200))*10;
        mxp += (Math.round(pages/250))*10;
    }
    else if (book.name == "mushy") {
        mxp += (Math.round(pages/4))*10;
        fxp += (Math.round(pages/8))*10;
        wxp += (Math.round(pages/12))*10;
        cxp += (Math.round(pages/16))*10;
    }
    // txp += cxp + wxp + fxp + mxp;
    // totalXP.innerHTML = txp;
    crimeXP.style.width = cxp + "%";
    funXP.style.width = fxp + "%";
    wiseXP.style.width = wxp + "%";
    mushyXP.style.width = mxp + "%";
    // crimeXP.innerHTML = cxp;
    // mushyXP.innerHTML = mxp;
    // funXP.innerHTML = fxp;
    // wiseXP.innerHTML = wxp;

    // localStorage.setItem('txp', JSON.stringify(txp))
    localStorage.setItem('cxp', JSON.stringify(cxp))
    localStorage.setItem('fxp', JSON.stringify(fxp))
    localStorage.setItem('mxp', JSON.stringify(mxp))
    localStorage.setItem('wxp', JSON.stringify(wxp))
}
reset.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
})


arr = [];
