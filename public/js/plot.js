var fxp_arr= JSON.parse(localStorage.getItem('fxp_arr')) ? JSON.parse(localStorage.getItem('fxp_arr')) : [] ;
var sxp_arr= JSON.parse(localStorage.getItem('sxp_arr')) ? JSON.parse(localStorage.getItem('sxp_arr')) : [] ;
var jxp_arr= JSON.parse(localStorage.getItem('jxp_arr')) ? JSON.parse(localStorage.getItem('jxp_arr')) : [] ;
var wxp_arr= JSON.parse(localStorage.getItem('wxp_arr')) ? JSON.parse(localStorage.getItem('wxp_arr')) : [] ;
var fireXP = []
var waterXP = []
var airXP = []
for (var  i=0 ; i<fxp_arr.length ; i++) {
  fireXP.push(parseInt(fxp_arr[i]))
  waterXP.push(parseInt(wxp_arr[i]))
  airXP.push(parseInt(sxp_arr[i]))
}
function plotXP() {
  new Chart("myChart", {
      type: "line",
      data: {
        labels: [1, 2,3 , 4, 5, 6, 7, 8, 9],
        datasets: [{
          label: "Fire",
          data: fireXP,
          borderColor: "red",
          fill: false
        },{
          label: "Air",
          data: airXP,
          borderColor: "yellow",
          fill: false
        },{
          label: "Water",
          data: waterXP,
          borderColor: "blue",
          fill: false
        }]
      },
      options: {
        legend: {display: true},
        title: {
          display:true,
          text: "Emotions with the theme of the book"
        }
      }
    });
    document.getElementById("mtChart").style.display="flex"
}