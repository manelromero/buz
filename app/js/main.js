$(document).ready(function (){

	function pictures() {
		$('#picture').css({
			'background': 'url("https://unsplash.it/' + $(window).width() + '/400?image=972") no-repeat bottom'
		});
	}

	pictures();

	$(window).scroll(function() {
		/* Check the location of each desired element */
		$('.appear').each(function() {
			var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 50;
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it in */
			if(bottom_of_window > bottom_of_object) {
				$(this).animate({'opacity': '1'}, 600);
			}
		});
	});

});
