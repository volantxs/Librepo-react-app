var modal = document.getElementById("addModal");
var gg = document.getElementById('gg')
var dosx = document.getElementById('dosx')
var tdotj = document.getElementById('tdotj')
var t = document.getElementById('t')
var s = document.getElementById('s')
var eotn = document.getElementById('eotn')
var tnotr = document.getElementById('tnotr')
var tpc = document.getElementById('tpc')
var so = document.getElementById('so')
var imp = document.getElementById('imp')
var ttl = document.getElementById('ttl')
var e = document.getElementById('e')
var dm = document.getElementById('dm')
var ttmr = document.getElementById('ttmr')
// Get the button that opens the modal
var btn = document.getElementById("addModalButton");
var ggBtn = document.getElementById("ggBtn");
var dosxBtn = document.getElementById("dosxBtn");
var tdotjBtn = document.getElementById('tdotjBtn')
var tBtn = document.getElementById('tBtn')
var sBtn = document.getElementById('sBtn')
var eotnBtn = document.getElementById('eotnBtn')
var tnotrBtn = document.getElementById('tnotrBtn')
var tpcBtn = document.getElementById('tpcBtn')
var soBtn = document.getElementById('soBtn')
var impBtn = document.getElementById('impBtn')
var ttlBtn = document.getElementById('ttlBtn')
var eBtn = document.getElementById('eBtn')
var dmBtn = document.getElementById('dmBtn')
var ttmrBtn = document.getElementById('ttmrBtn')
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var ggClose = document.getElementById('ggClose');
var dosxClose = document.getElementById('dosxClose');

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


ggBtn.onclick = function() {
  gg.style.display = "flex";
}
ggClose.onclick = function() {
  gg.style.display = "none";
}
dosxBtn.onclick = function() {
  dosx.style.display = "flex";
}
dosxClose.onclick = function() {
  dosx.style.display = "none";
}
tdotjBtn.onclick = function() {
  tdotj.style.display = "flex";
}
tdotjClose.onclick = function() {
  tdotj.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}