const totalXP = document.getElementById('total-xp')
var xp = parseInt(localStorage.getItem('xp')) ? parseInt(localStorage.getItem(('xp'))) : 0 ;
totalXP.innerHTML = xp;

function getXP(bookxp) {
    var bookXP = document.getElementById(bookxp).ariaValueNow
    xp += parseInt(bookXP);
    totalXP.innerHTML = xp;
    localStorage.setItem('xp', JSON.stringify(xp))
}

