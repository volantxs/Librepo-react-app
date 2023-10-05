const progressBar = document.getElementById("progressBar")

function disableButton(e) {
  var btn = e.target;

btn.addEventListener('click', function (e) {
  e.preventDefault();
  btn.disabled = true
  window.localStorage.setItem(btn.id, 'disabled')
  btn.innerHTML = 'completed';
  btn.style.color = 'blue'
 })
}

window.onload = (e) => {
  progressBar.style.visibility = 'visible'
}

