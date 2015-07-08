/*------------------------------------------------------------------
Project:	Rakshaniti
Version:	0.1
Created: 		20/11/2014
Last change:	01/12/2014
-------------------------------------------------------------------*/

// Isotop Gallery 
// ==============

// Layout
$('#isotope-container').isotope({
	// options
	itemSelector : '.isotope-item',
	layoutMode : 'fitRows'
});

// Filtering
var $container = $('#isotope-container');
	$container.isotope({
});
$('#filters a').click(function(){
	var selector = $(this).attr('data-filter');
	$container.isotope({ filter: selector });
	return false;
});