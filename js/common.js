$(function(){
	
	/* Выдвижное меню */
	$('#my-menu').mmenu({
		extensions: ['widescreen', 'fx-menu-slide', "fx-listitems-slide", "pagedim-black", "position-left"],
		navbar: {
			title: '<img src="img/logo.png" alt="Lekas">'
		}
	});
	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	});
	
	/* Карусель для туров */
	$('.tour-carousel').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: false,
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			575: {
				items: 2
			},
			660: {
				items: 2
			},
			829: {
				items: 2
			},
			830: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
	
		/* Карусель для инстаграм */
	$('.insta-carousel').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: false,
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			575: {
				items: 2
			},
			660: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	});
			/* Карусель для отзывов */
	$('.feedback-carousel').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: true,
		dots: true,
		navText: ['<span><img src="img/icons/arrow-left.svg">Предыдущий отзыв</span>', '<span>Следующий отзыв<img src="img/icons/arrow-right.svg"></span>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			575: {
				items: 1
			},
			660: {
				items: 1
			}
		}
	});
	
		/* Карусель для других туров */
	$('.a_tours-carousel').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: false,
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			575: {
				items: 2
			},
			660: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	});

			/* Карусель для отзывов */
	$('.contacts-carousel').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: true,
		dots: false,
		navText: ['', '<span>Другой офис<img src="img/icons/arrow-right.svg"></span>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			575: {
				items: 1
			},
			660: {
				items: 1
			}
		}
	});
	
	$(".contacts-carousel .owl-nav").addClass("container");
	
	$(".popup").magnificPopup();
    // $('body').fadeOut();
});