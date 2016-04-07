if (!!(window.addEventListener)) window.addEventListener('DOMContentLoaded', main);
else window.attachEvent('onload', main);

function main() {

    
    bubbleChart();
    
}

var areas={

  "areaPositions":[
    {"x":"34","y":"56"},
    {"x":"23","y":"87"},
    {"x":"74","y":"25"}
  ]

};
var pieColors = {
    "Green": "rgba(102, 255, 102,0.6)",
    "Violet": "rgba(172, 85, 138,0.6)",
    "Red": "rgba(255, 60, 30,0.6)",
    "LightBlue": "rgba(58, 194, 208,0.6)",
    "Yellow": "rgba(255, 255, 0,0.6)",
    "Macaroni":"rgba(250, 175, 60,0.6)",
    "WebHeadBlue": "rgba(8, 129, 194,0.6)",
    "WebHeadOrange": "rgba(243, 115, 42,0.6)"
};
var highlightColors = {
    "Green": "rgba(102, 255, 102,01)",
    "Violet": "rgba(172, 85, 138,0.8)",
    "Red": "rgba(255, 60, 30,0.8)",
    "LightBlue": "rgba(58, 194, 208,0.8)",
    "Yellow": "rgba(255, 255, 0,0.8)",
    "Macaroni": "rgba(250, 175, 60,0.8)",
    "WebHeadBlue": "rgba(8, 129, 194,0.8)",
    "WebHeadOrange": "rgba(243, 115, 42,0.8)"
   
};
function bubbleChart() {

    var bubbleData = [
      {
        label: 'Reports in Area',
        strokeColor: '#007ACC',
        pointColor: "rgba(58, 194, 208,0.6)",
        pointStrokeColor: '#fff',
        data: [
          { x: areas.areaPositions[0].x, y:areas.areaPositions[0].y, r: 4 },
          { x: areas.areaPositions[1].x, y:areas.areaPositions[1].y, r: 6 },
          { x: areas.areaPositions[2].x, y:areas.areaPositions[2].y, r: 8 },


        ]
      }
    ];

    var ctx = document.getElementById("header-canvas").getContext("2d");
    var myChart = new Chart(ctx).Scatter(bubbleData, {
      showScale: false,
      // Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: false,
      // Boolean - Whether to show a stroke for datasets
      datasetStroke: false,
      // Boolean - Whether to show a dot for each point
      pointDot: true,

      // Number - Pixel width of point dot stroke
      pointDotStrokeWidth: 1,

      // Number - Radius of each point dot in pixels
      pointDotRadius: 2,

      // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius: 1,
    });
    document.getElementById("legend").innerHTML = myChart.generateLegend();

}