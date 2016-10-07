$( document ).ready(function() {

	/* Initial Page Load will show Home Page */
	showHomePage();

	/* Show Home Page */
	function showHomePage() {
		$("#menu-container .content").hide();
		$('#menu-0').addClass("animated fadeInDown").show();	
	}
	
	/* show Home Page if logo is clicked*/
	$("#logo-image").click(function(){
		showHomePage();		
	});

	/* Show content, hide others */
	$(".main-menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$("#menu-container .content").hide();
		$("#menu-container #menu-"+id[1]).addClass("animated fadeInDown").show();
		return false;
	});

});