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

var label_array = []
for (var  i=0 ; i<fxp_arr.length ; i++){
  label_array.push(i)
}

function plotXP() {
  new Chart("myChart", {
      type: "line",
      data: {
        labels: label_array,
        datasets: [{
          label: "Crimes, Action, Fright",
          data: fire_array,
          borderColor: "red",
          fill: false
        },{
          label: "Tragic, Shallow, Puzzle",
          data: air_array,
          borderColor: "yellow",
          fill: false
        },{
          label: "Wise, Curious, Growth",
          data: water_array,
          borderColor: "blue",
          fill: false
        }, {
          label: "Love, Freedom, Travel",
          data: earth_array,
          borderColor: "green",
          fill: false

        }]
      },
      options: {
        legend: {display: true},
        title: {
          display:true,
          text: "This box will automatically disappear in a few seconds"
        }
      }
    });
    document.getElementById("myChart").style.display = "flex"
   setTimeout(() => {
    document.getElementById("myChart").style.display = "none"}, 10000)
  }

 