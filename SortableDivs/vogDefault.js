$(document).ready(function(){

			$( ".sortable" ).sortable({
      		placeholder: "highlight-placeholder",		// Assign the class to the placeholder attr.
      		scroll: false,								// If page scrolls whenever item is dragged to the edge.
      		revert: true,								// Sets the animation that moves the object to it's new place.
      		tolerance: "pointer",						// Sets the placement sensitivity {intersect/pointer}.
      		zIndex: 9999,								// Sets the zIndex of the sortable item when selected.
      		items: "> li",								// Specifies which items inside the element should be sortable.
      		delay: 150,									// Delays the draggable so help prevent unwanted drags for clicks
    	});
    	$( ".sortable" ).disableSelection();
    	alert("crap!");
});