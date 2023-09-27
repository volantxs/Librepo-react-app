const lbm = document.getElementById('leaderboardModal');
const lb = document.getElementById('leaderboardModal');
const closeBtn = document.getElementById('closeBtn');

function leaderboard() {
    lbm.style.display="flex"
}

function getName() {
    
}

// setTimeout(leaderboard, 1000);

closeBtn.addEventListener('click', function() {
 lbm.style.display = "none";
})
