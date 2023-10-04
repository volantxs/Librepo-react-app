var fxp_arr = JSON.parse(localStorage.getItem('fxp_arr')) ? JSON.parse(localStorage.getItem('fxp_arr')) : [];
var axp_arr = JSON.parse(localStorage.getItem('axp_arr')) ? JSON.parse(localStorage.getItem('axp_arr')) : [];
var exp_arr = JSON.parse(localStorage.getItem('exp_arr')) ? JSON.parse(localStorage.getItem('exp_arr')) : [];
var wxp_arr = JSON.parse(localStorage.getItem('wxp_arr')) ? JSON.parse(localStorage.getItem('wxp_arr')) : [];
var fire_array = []
var water_array = []
var air_array = []
var earth_array = []
for (var  i=0 ; i<fxp_arr.length ; i++) {
  fire_array.push(parseInt(fxp_arr[i]))
  water_array.push(parseInt(wxp_arr[i]))
  air_array.push(parseInt(axp_arr[i]))
  earth_array.push(parseInt(exp_arr[i]))
}
function plotXP() {
  new Chart("myChart", {
      type: "line",
      data: {
        labels: [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10,11,12, 13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [{
          label: "Fire",
          data: fire_array,
          borderColor: "red",
          fill: false
        },{
          label: "Air",
          data: air_array,
          borderColor: "yellow",
          fill: false
        },{
          label: "Water",
          data: water_array,
          borderColor: "blue",
          fill: false
        }, {
          label: "Earth",
          data: earth_array,
          borderColor: "green",
          fill: false

        }]
      },
      options: {
        legend: {display: true},
        title: {
          display:true,
          text: "Elemental Segregation"
        }
      }
    });
    document.getElementById("myChart").style.display = "flex"
  
  }

 