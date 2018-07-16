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
			alert("1");
			// var count = parseInt($(this).closest(".cart-list__count input").val());
			// $(this).closest(".cart-list__count input").val(count);
		})
		

});

