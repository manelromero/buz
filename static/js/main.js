$(document).ready(function (){
	// Activate home tab
	$('.tab').fadeIn(600);
	// Burger menu
	$('.burger').click(function() {
		$('.burger-menu').slideToggle(300);
		$('#wrapper').toggleClass('no-scroll');
		if ($('#burger-icon-close').css('display') == 'none') {
			$('#burger-icon-open').fadeOut(300).promise().done(function() {
				$('#burger-icon-close').fadeIn(300);
			});
		} else {
			$('#burger-icon-close').fadeOut(300).promise().done(function() {
				$('#burger-icon-open').fadeIn(300);
			});
		}
	});
	// Burger menu option click event handler
	$('.burger-menu a').click(function() {
		$('#burger-icon-close').fadeToggle();
		$('#burger-icon-open').fadeToggle();
		$('.burger-menu').slideToggle(300);
		$('#wrapper').removeClass('no-scroll');
		var newTab = this.name;
	    $('.tab').fadeOut(200).promise().done(function() {
	    	$('#' + newTab).fadeIn(500);
	    });
	});

	function pictures() {
		$('#picture').css({
			'background': 'url("static/img/picture.jpg") no-repeat',
			'background-position': 'bottom',
			'background-size': 'cover'
		});
	};

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

	pictures();
	appear();

	$(window).scroll(function() {
		appear();
	});

	$(window).resize(function(){
		pictures();
	});

});
