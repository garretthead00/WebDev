$(document).ready(function(){
	

  $('.helpControl').bind('click', function (event) {
    
    
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
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
});