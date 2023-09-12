// // Create a variable storing the buttons
const btns = document.querySelectorAll('.btn');

// // Retrieve the button state from localStorage and each
// // button's state
const getBtnState = function (btns) {
  [].forEach.call(btns, function(btn) {
    if (window.localStorage.getItem(btn.id) == 'disabled') {
      btn.disabled = true
    }
  });
};

// // Add an event listener to each button to
// // disable and store the button's state on click
[].forEach.call(btns, function(btn) {
   btn.addEventListener('click', function (e) {
     btn.disabled = true
     window.localStorage.setItem(btn.id, 'disabled')
      document.getElementsByName(dis())[0].style.display = 'none';

   })
});

// // Call the getBtnState function to set the initial state
// // of each button
getBtnState(btns);