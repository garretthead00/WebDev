if (!!(window.addEventListener)) window.addEventListener('DOMContentLoaded', main);
else window.attachEvent('onload', main);

function main() {
    var actualTotal = 15, totalGoal = 100;

    multiDoughnutChart(actualTotal, totalGoal);

    // Toggle the help pop up
    $('.helpControl').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
        $('[data-popup="' + targeted_popup_class + '"]').css('left',event.pageX + 10);      // <<< use pageX and pageY
        $('[data-popup="' + targeted_popup_class + '"]').css('top',event.pageY);
        $('[data-popup="' + targeted_popup_class + '"]').css('display','inline');     
        $('[data-popup="' + targeted_popup_class + '"]').css("position", "absolute");  // <<< also make it absolute!
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });

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