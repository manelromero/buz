$(document).ready(function (){
	// Activate home tab
	$('.tab').fadeIn(200);
	// Burger menu
	$('.burger').click(function() {
		$('.burger-menu').slideToggle(300);

		// $('#wrapper').toggleClass('no-scroll');
		if ($('#burger-icon-close').css('display') == 'none') {
			$('#burger-icon-open').fadeOut(100).promise().done(function() {
				$('#burger-icon-close').fadeIn(100);
			});
		} else {
			$('#burger-icon-close').fadeOut(100).promise().done(function() {
				$('#burger-icon-open').fadeIn(100);
			});
		}
	});
	// Burger menu option click event handler
	$('.menu-link').click(function() {
		$('#burger-icon-close').fadeToggle(100);
		$('#burger-icon-open').fadeToggle(100);
		$('.burger-menu').slideToggle();		
	});

	function appear() {
		$('.appear').each(function() {
			var bottom_of_object = $(this).offset().top + 100; // $(this).outerHeight() - 50;
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			// If the object is completely visible in the window, fade it in
			if (bottom_of_window > bottom_of_object) {
				$(this).animate({'opacity': '1'}, 600);
			}
		});
	};

	appear();

	$(window).scroll(function() {
		appear();
	});

});
