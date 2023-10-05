var fireXP = document.getElementById('fireXP');
var earthXP = document.getElementById('earthXP');
var airXP = document.getElementById('airXP');
var waterXP = document.getElementById('waterXP');
const reset = document.getElementById('reset');
const pro = document.getElementById("progressBar")
// saving XPs
var fxp = parseInt(localStorage.getItem('fxp')) ? parseInt(localStorage.getItem(('fxp'))) : 0;
var exp = parseInt(localStorage.getItem('exp')) ? parseInt(localStorage.getItem(('exp'))) : 0;
var axp = parseInt(localStorage.getItem('axp')) ? parseInt(localStorage.getItem(('axp'))) : 0;
var wxp = parseInt(localStorage.getItem('wxp')) ? parseInt(localStorage.getItem(('wxp'))) : 0;
//  getting all XP data
var fxp_arr = JSON.parse(localStorage.getItem('fxp_arr')) ? JSON.parse(localStorage.getItem('fxp_arr')) : [];
var axp_arr = JSON.parse(localStorage.getItem('axp_arr')) ? JSON.parse(localStorage.getItem('axp_arr')) : [];
var exp_arr = JSON.parse(localStorage.getItem('exp_arr')) ? JSON.parse(localStorage.getItem('exp_arr')) : [];
var wxp_arr = JSON.parse(localStorage.getItem('wxp_arr')) ? JSON.parse(localStorage.getItem('wxp_arr')) : [];
// converting xp to pixels
fireXP.style.width = fxp + "px";
earthXP.style.width = exp + "px";
waterXP.style.width = wxp + "px";
airXP.style.width = axp + "px";
// calculate individual XP for books
 function getXP(e) {
    var name = e.target.name;
    // alert(name)
    var pages = parseInt(e.target.value);
    // alert(pages)
    if (name == "fire") {
        fxp += (Math.round(pages / 100)) * 10;
        axp += (Math.round(pages / 250)) * 10;
        wxp += (Math.round(pages / 500)) * 10;
        exp += (Math.round(pages / 750)) * 10;
    }
    else if (name == "earth") {
        exp += (Math.round(pages / 100)) * 10;
        wxp += (Math.round(pages / 250)) * 10;
        fxp += (Math.round(pages/500)) * 10;
        axp += (Math.round(pages / 750)) * 10;

    }
    else if (name == "air") {
        axp += (Math.round(pages / 1000)) * 10;
        wxp += (Math.round(pages / 250)) * 10;
        fxp += (Math.round(pages / 500)) * 10;
        exp += (Math.round(pages / 750)) * 10;
    }
    else if (name == "water") {
        wxp += (Math.round(pages / 100)) * 10;
        exp += (Math.round(pages / 250)) * 10;
        axp += (Math.round(pages / 500)) * 10;
        fxp += (Math.round(pages / 750)) * 10;
    }
    try {
        fireXP.style.width = fxp + "px";
        earthXP.style.width = exp + "px";
        waterXP.style.width = wxp + "px";
        airXP.style.width = axp + "px";
    } catch (e) {
        alert("Couldn't add XP in progress bar")
    }
    try{
// storing new book's XP data into localstorage
    localStorage.setItem('fxp', JSON.stringify(fxp))
    localStorage.setItem('exp', JSON.stringify(exp))
    localStorage.setItem('axp', JSON.stringify(axp))
    localStorage.setItem('wxp', JSON.stringify(wxp))
    } catch(e) {
        alert("Couldn't save XP in storage")
    }

    dataXP(fxp, wxp, axp, exp)
     progressBar.style.visibility = 'visible'

}
// button to reset saved local storage
reset.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
})
// dataset for all XPs
function dataXP(fxp, wxp, axp, exp) {
    fxp_arr.push(fxp);
    axp_arr.push(axp);
    wxp_arr.push(wxp);
    exp_arr.push(exp);
    localStorage.setItem("fxp_arr", JSON.stringify(fxp_arr));
    localStorage.setItem("axp_arr", JSON.stringify(axp_arr));
    localStorage.setItem("wxp_arr", JSON.stringify(wxp_arr));
    localStorage.setItem("exp_arr", JSON.stringify(exp_arr));
}
