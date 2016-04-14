$(document).ready(function (){
	// Burger menu
	$('.burger').click(function() {
		$('#burger-menu').slideToggle(200);
		$('.burger').toggleClass('close');
		$('body').toggleClass('no-scroll');
	});
	// Option click event handler
	$('.option').click(function() {
		$('.option').removeClass('active');
		$(this).addClass('active');
		$('.burger').removeClass('close');
		$('#burger-menu').hide();
		$('body').removeClass('no-scroll');
		$('.tab').hide();
		$('#' + this.name).fadeIn(600);
	});


	function pictures() {
		$('#picture').css({
			'background': 'url("https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=' + $(window).width() + '&w=400&fit=crop") no-repeat bottom'
		});
	}

	pictures();

	$(window).scroll(function() {
		/* Check the location of each desired element */
		$('.appear').each(function() {
			var bottom_of_object = $(this).offset().top + 100; // $(this).outerHeight() - 50;
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it in */
			if(bottom_of_window > bottom_of_object) {
				$(this).animate({'opacity': '1'}, 600);
			}
		});
	});

});
