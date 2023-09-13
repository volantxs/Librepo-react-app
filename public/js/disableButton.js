// // Create a variable storing the buttons
const btns = document.querySelectorAll('.btn-book');
const progressBar = document.getElementById('progressBar');

// // Retrieve the button state from localStorage and each
// // button's state
const getBtnState = function (btns) {
  [].forEach.call(btns, function(btn) {
    if (window.localStorage.getItem(btn.id) == 'disabled') {
      btn.disabled = true
      btn.innerHTML = 'completed';
      btn.style.color = 'blue'
    progressBar.style.visibility = 'visible'

    }
  });
};

// // Add an event listener to each button to
// // disable and store the button's state on click
[].forEach.call(btns, function(btn) {
   btn.addEventListener('click', function (e) {
    btn.disabled = true
    window.localStorage.setItem(btn.id, 'disabled')
    btn.innerHTML = 'completed';
    btn.style.color = 'blue'
    btn.style.transition = '2s'

    progressBar.style.visibility = 'visible'

   })
});

// // Call the getBtnState function to set the initial state
// // of each button
getBtnState(btns);