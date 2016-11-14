$(document).ready(function() {

	//Add the attached icon image before the text in each LI element in the main navigation	
	$("#menu li a").prepend('<img src="icon.png">');

	//Clicking on the H1 element in the header changes the background color of the header DIV
	$("#header h1").on( "click", function() {
	  		$("#header").css( "background-color", "#00bfbf" )
	  	})

	//Change the text color of the first LI element in one of the sub-lists in the sidebar
	$("#sidebar_content_1 li:first a").css("color", "#00bfbf");

	//Move the position of the even “numbered” LI elements in one of the sub-lists in the sidebar to the right by 5 pixels
	$("#sidebar_content_2 li:nth-child(2n)").css("padding-left", "5px");

	//Clicking on one of the post titles in the main content area replaces the content of the content DIV 
	//(with the ID of “content”) with content you specify
	$(".post h2:first").on( "click", function() {
	  		$("#content h2:first").replaceWith( "<h2>This is a new header</h2>" );
	  	});

	//Clicking on one of the H2 elements in the sidebar toggles visibility of the list below it
	$( "#sidebar h2" ).on( "click", function() {
  		$("#sidebar_content_1 li a").toggle()
  	});

	});