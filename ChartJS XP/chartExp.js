if (!!(window.addEventListener)) window.addEventListener('DOMContentLoaded', main);
else window.attachEvent('onload', main);

function main() {
    var actualTotal = 15, totalGoal = 100;
    doughnutLegend(actualTotal, totalGoal);
    polarChart();
    multiDoughnutChart(actualTotal, totalGoal);
    doughnutChartWithCustomLegend(); 
    barChart();

}


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

function polarChart() {
    var chartData = [
        {
                     value: 36,
                     color: pieColors["WebHeadBlue"],
                     highlight: highlightColors["WebHeadBlue"],
                     animationEasing: "easeOutBounce",
                     label: "Quality"
                 },
                 {
                      value: 150,
                      color: pieColors["WebHeadOrange"],
                      highlight: highlightColors["WebHeadOrange"],
                      animationEasing: "easeOutBounce",
                      label: "Continuous Improvement"
                  },
                  {
                      value: 80,
                      color: pieColors["Green"],
                      highlight: highlightColors["Green"],
                      animationEasing: "easeOutBounce",
                      label: "Environmental"
                  },
                  {
                      value: 47,
                      color: pieColors["Violet"],
                      highlight: highlightColors["Violet"],
                      animationEasing: "easeOutBounce",
                      label: "Other"
                  },
                  
                  {
                      value: 15,
                      color: pieColors["Red"],
                      highlight: highlightColors["Red"],
                      animationEasing: "easeOutBounce",
                      label: "Safety"
                  }
    ];


    var options = {
        responsive: true,
        tooltipTemplate: "<%=label%>: <%=value%>"
    }

    var ctx2 = document.getElementById("polarCanvas").getContext("2d");
    var myPolar = new Chart(ctx2).PolarArea(chartData, options);

// This handles the click event of each segment in the chart.
    $("#polarCanvas").click(function(evt){
            var activePoints = myPolar.getSegmentsAtEvent(evt);           
            //var url = "http://example.com/?label=" + activePoints[0].label + "&value=" + activePoints[0].value;
            //alert(url);
            var targeted_popup_class = jQuery(this).attr('data-popup-open');
            $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
            $('#dataResults').html("label="+ activePoints[0].label + "& value=" + activePoints[0].value);
            evt.preventDefault();
    });
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
    
        e.preventDefault();
    }); 

}

function multiDoughnutChart(actualTotal, totalGoal) {
    var doughnutData = [
                    {
                        value: actualTotal,
                        color: "rgba(243, 115, 42,0.8)",
                        highlight: "rgba(243, 115, 42,1)",
                        animationEasing: "easeOutBounce",
                        label: "Total Reports Resolved",

                    },
                 {
                     value: totalGoal - actualTotal,
                     color: "rgba(243, 115, 42,0.3)",
                     highlight: "rgba(243, 115, 42,0.5)",
                     animationEasing: "easeOutBounce",
                     label: "Reports Remaining"
                 }

    ];

    var doughnutData2 = [
                    {
                        value: 50,
                        color: "rgba(8, 129, 194,0.8)",
                        highlight: "rgba(8, 129, 194,1)",
                        animationEasing: "easeOutBounce",
                        label: "Total Reports Resolved"
                    },
                 {
                     value: totalGoal - 50,
                     color: "rgba(8, 129, 194,0.3)",
                     highlight: "rgba(8, 129, 194,0.5)",
                     animationEasing: "easeOutBounce",
                     label: "Reports Remaining"
                 }

    ];

    

    var ctx1 = $("#d1").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1).Doughnut(doughnutData, {
        percentageInnerCutout: 80,
        
    });
    var ctx2 = $("#d2").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2).Doughnut(doughnutData2, {
        percentageInnerCutout: 80,
        
    });
}


function doughnutChartWithCustomLegend() {

    var randomScalingFactor = function () { return Math.round(Math.random() * 100) };
    var randomColorFactor = function () { return Math.round(Math.random() * 255) };
    var doughnutData = [
                 {
                     value: 36,
                     color: pieColors["WebHeadBlue"],
                     highlight: highlightColors["WebHeadBlue"],
                     animationEasing: "easeOutBounce",
                     label: "Quality"
                 },
                 {
                      value: 150,
                      color: pieColors["WebHeadOrange"],
                      highlight: highlightColors["WebHeadOrange"],
                      animationEasing: "easeOutBounce",
                      label: "Continuous Improvement"
                  },
                  {
                      value: 80,
                      color: pieColors["Green"],
                      highlight: highlightColors["Green"],
                      animationEasing: "easeOutBounce",
                      label: "Environmental"
                  },
                  {
                      value: 47,
                      color: pieColors["Violet"],
                      highlight: highlightColors["Violet"],
                      animationEasing: "easeOutBounce",
                      label: "Other"
                  },
                  
                  {
                      value: 15,
                      color: pieColors["Red"],
                      highlight: highlightColors["Red"],
                      animationEasing: "easeOutBounce",
                      label: "Safety"
                  }
    ];

    var options = {
        responsive: true,
        percentageInnerCutout: 40,
        tooltipTemplate: "<%=label%>: <%=value%>"
    }
    
    var ctx = $("#d3").get(0).getContext("2d");    
    var doughnutChartWithCustomLegend = new Chart(ctx).Doughnut(doughnutData, options);

    // This handles the click event of each segment in the chart.
    $('#d3').click(function(evt){
            var activePoints = doughnutChartWithCustomLegend.getSegmentsAtEvent(evt);           
            //var url = "http://example.com/?label=" + activePoints[0].label + "&value=" + activePoints[0].value;
            //alert(url);
            var targeted_popup_class = jQuery(this).attr('data-popup-open');
            $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
            $('#dataResults').html("label="+ activePoints[0].label + "& value=" + activePoints[0].value);
            evt.preventDefault();
    });
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
    
        e.preventDefault();
    }); 
}

// doughNutLegend sets the Legend of the #doughnutLegend element
function doughnutLegend(actualTotal,totalGoal) {
    var thisLegend = $('#doughnutLegend');
    var legendString = "50%"
    thisLegend.text(legendString);    
}

function barChart() {

    var randomScalingFactor = function () { return Math.round(Math.random() * 100) };
    //var randomColorFactor = function () { return Math.round(Math.random() * 255) };

    var barChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            },
            {
               
                fillColor: "rgba(8, 129, 194,0.5)",
                strokeColor: "rgba(8, 129, 194,0.8)",
                highlightFill: "rgba(8, 129, 194,0.75)",
                highlightStroke: "rgba(8, 129, 194,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            },
            {
                
                fillColor: "rgba(243, 115, 42,0.5)",
                strokeColor: "rgba(243, 115, 42,0.8)",
                highlightFill: "rgba(243, 115, 42,0.75)",
                highlightStroke: "rgba(243, 115, 42,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }
        ]
    };

    var options = {
        responsive: true,
        tooltipTemplate: "<%=label%>: <%=value%>"
    }

    var ctx = document.getElementById("categoryBarCanvas").getContext("2d");
    var myStackedBar = new Chart(ctx).StackedBar(barChartData, options);

    var randomScalingFactor = function () { return Math.round(Math.random() * 100) };
    //var randomColorFactor = function () { return Math.round(Math.random() * 255) };

    var barChartData2 = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            },
            {
                
                fillColor: "rgba(8, 129, 194,0.5)",
                strokeColor: "rgba(8, 129, 194,0.8)",
                highlightFill: "rgba(8, 129, 194,0.75)",
                highlightStroke: "rgba(8, 129, 194,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            },
            {
                
                fillColor: "rgba(243, 115, 42,0.5)",
                strokeColor: "rgba(243, 115, 42,0.8)",
                highlightFill: "rgba(243, 115, 42,0.75)",
                highlightStroke: "rgba(243, 115, 42,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            },
            {

                fillColor: "rgba(76, 84, 87,0.5)",
                strokeColor: "rgba(76, 84, 87,0.8)",
                highlightFill: "rgba(76, 84, 87,0.75)",
                highlightStroke: "rgba(76, 84, 87,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            },
            {

                fillColor: "rgba(102, 255, 102,0.5)",
                strokeColor: "rgba(102, 255, 102,0.8)",
                highlightFill: "rgba(102, 255, 102,0.75)",
                highlightStroke: "rgba(102, 255, 102,1)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }
        ]
    };

    var options = {
        responsive: true,
        tooltipTemplate: "<%=label%>: <%=value%>"
    }

    var ctx2 = document.getElementById("areaBarCanvas").getContext("2d");
    var myStackedBar = new Chart(ctx2).StackedBar(barChartData2, options);
}
