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
		
	

});

function countPlus() {
	var count = $(this).closest(".cart-list__count input").value;
	// count += 1;
	alert(count);
}