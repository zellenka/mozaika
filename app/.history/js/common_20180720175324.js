$(document).ready(function () {
if($(".main-slider").length > 0) {
	new Swiper('.main-slider', {
		// Optional parameters
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}

if($(".gallery-top").length > 0) {
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 5,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      });
      galleryTop.controller.control = galleryThumbs;
      galleryThumbs.controller.control = galleryTop;
}

	// count products in the cart

	$(".product-plus").click(function (e) {
		e.preventDefault();
		var parent = $(this).closest(".cart-list__count");
		var count = parent.find("input").val();
		++count;
		parent.find("input").val(count);
	});

	$(".product-minus").click(function (e) {
		e.preventDefault();

		var parent = $(this).closest(".cart-list__count");
		var count = parent.find("input").val();
		if (count <= 0) {
			count == 0
		} else {
			--count;
			parent.find("input").val(count);
		}

    });

    // count products in the product

    $(".quantity__block-plus").click(function (e) {
		e.preventDefault();
		var parent = $(this).closest(".quantity__block-count-block");
		var count = parent.find("input").val();
		++count;
		parent.find("input").val(count);
	});

	$(".quantity__block-minus").click(function (e) {
		e.preventDefault();

		var parent = $(this).closest(".quantity__block-count-block");
		var count = parent.find("input").val();
		if (count <= 0) {
			count == 0
		} else {
			--count;
			parent.find("input").val(count);
		}

    });
    
    

// slider for category



function mobMenu() {

    var x = window.innerWidth;

    if (x <= '992') {
       $(".header__top-nav").append(".header__mob-menu-block");
    }

}

mobMenu();