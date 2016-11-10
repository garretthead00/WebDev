$(".clickable").click(function() {

    // Get the closest tr parent element
    // Find all sibling elements in front of it
     // Get their count
    var rowIndex = $(this).closest('tr.clickable').prevAll().length;
    
    // get distance to nearest tr with .clickablee class
    var nextIndex = $(this).closest('tr').nextUntil(".clickable").length;
    
    alert("row: " + rowIndex + " next: " + nextIndex);
    
    
    // every row after this for the nextIndex amount of rows are toggled
    var $thisRow = $(this).next();
    for(i=0;i<nextIndex;i++){
    	$thisRow.toggle();
      $thisRow = $thisRow.next();
    	
    }
});
