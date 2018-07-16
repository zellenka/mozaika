$( document ).ready(function() {
	var mySwiper = new Swiper ('.swiper-container', {
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
		})
		
		$(".product-plus").click(function(e) {
			e.preventDefault();
			var parent = $(this).closest(".cart-list__count");
			var count = parent.find("input").val();
			++count;
			parent.find("input").val(count);
		});

		$(".product-minus").click(function(e) {
			e.preventDefault();
			var parent = $(this).closest(".cart-list__count");
			var count = parent.find("input").val();
			--count;
			parent.find("input").val(count);
		});
		

});

