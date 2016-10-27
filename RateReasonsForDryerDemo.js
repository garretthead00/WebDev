function RateReasonsForDryer(d, r){
	Dryer = d;
	Reasons = r;
}

function Reason(r, cnt){
	Reason = r;
	ReasonsCount = cnt;
}

var colorlist = {
	xColors = [
		chartColors["WebHeadBlue"],
		chartColors["Violet"],
		chartColors["LightBlue"],
		chartColors["Green"],
		chartColors["WebHeadOrange"]

	],
	yColors = [
		highlightColors["WebHeadBlue"],
		highlightColors["Violet"],
		highlightColors["LightBlue"],
		highlightColors["Green"],
		highlightColors["WebHeadOrange"]
	]

};

function GetRateReasonsForDryer(ds){

	// Fill dryerList and Reasons list with all possible values of the ds.Dryer and ds.Reason, respectively
	// Check to see if the value exists so that there are no duplicates
	var dryerList = [];
	var reasonList = [];
	$(ds).each(function (x,d){
		if(!dryerList.contains(d.Dryer)){ dryerList.push(d.Dryer); }
		if(!reasonList.contains(d.Reason)){ reasonList.push(d.Reason); }
	});

	// filter the lists from duplicates;
	// this may not be necessary if the contains works correctly.
	dryerList = dryerList.filter(onlyunique);
	reasonList = reasonList.filter(onlyunique);


	// Build the RateReasonsForDryerList for each dryer and reason record created from the ds.
	var rateReasonsForDryerList = [];
	$(dryerList).each(function(x,d){
		var newRateReasonForDryer = New RateReasonsForDryer(d.Dryer, null);
		$(reasonList).each(function(y,r){
			var newReason = New Reason(r.Reason, null);
			newRateReasonForDryer.Reasons.push(newReason);
		});
		rateReasonsForDryerList.push(newRateReasonForDryer);
	});

	// Match the rateReasonsForDryerList with the ds to get it's associated ReasonCount
	$(rateReasonsForDryerList).each(function(x,rateReason){
		$(ds).each(function(y,d){
			if(rateReason.Dryer == d.Dryer){
				$(rateReason.Reasons).each(function(i,r){

					// if a match is found then check is the d.ReasonCount has a value.
					// if not then return 0 else return the d.ReasonCount
					if(r.Reason == d.Reason){
						r.ReasonCount = (d.ReasonCount == null) ? 0 : d.ReasonCount;
					}}
				});
			}

		});
	});

	// Create the datasets to use in the radar chart from the rateReasonsForDryerList
	var rateReasonDatasets = [];
	$(rateReasonsForDryerList).each(function(x,rateReason){
		var thisReasonsCounts = [];
		$(rateReason.Reasons).each(function(y,reason){
			thisReasonsCounts.push(reason.ReasonCount);
		});

		// get random integer between 0 and the length of the chartColors array
		var thisColorIndex = Math.floor((Math.random() * (chartColors.length-1));
		var thisDataset = {
			label: rateReason.Dryer,
            backgroundColor: colorlist.xColors[thisColorIndex],
            borderColor: colorlist.xColors[thisColorIndex],
            pointBackgroundColor: colorlist.yColors[thisColorIndex],
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: colorlist.yColors[thisColorIndex],
            data: thisReasonsCounts
		};
		rateReasonDatasets.push(thisDataset);
	});

	// Create the radarData to use in the radar chart
	var radarData = {
    	labels: reasonList,
    	datasets: rateReasonDatasets
	};

	// Finally create the chart and 
	var ctx = document.getElementById("radarCanvas");
	var radarChart = new Chart(ctx, {
	    type: "radar",
	    data: radarData,
	    options: {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            }
	    }
	});
}