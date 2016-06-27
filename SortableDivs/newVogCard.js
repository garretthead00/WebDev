$(document).ready(function(){

	var cleanup = /\"|\'|\)/g;

	$('.downVoteIcon').click(function() {
		if($(this).css("background-image").split('/').pop().replace(cleanup, '') == "voteArrowInactive.png"){
			$(this).css('background-image', 'url(images/voteArrowDownvote.png)');
			$('.upVoteIcon').css('background-image', 'url(images/voteArrowInactive.png)');
			$('.voteCount').css('color','rgb(51,153,255)');
		}
		else{
			$(this).css('background-image', 'url(images/voteArrowInactive.png)');
			$('.voteCount').css('color','rgb(128,128,128)');
		}
  	});


	$('.upVoteIcon').click(function() {
		if($(this).css("background-image").split('/').pop().replace(cleanup, '') == "voteArrowInactive.png"){
			$(this).css('background-image', 'url(images/voteArrowUpvote.png)');
			$('.downVoteIcon').css('background-image', 'url(images/voteArrowInactive.png)');
			$('.voteCount').css('color','rgb(255,140,0)');
		}
		else{
			$(this).css('background-image', 'url(images/voteArrowInactive.png)');
			$('.voteCount').css('color','rgb(128,128,128)');
		}
  	});



});