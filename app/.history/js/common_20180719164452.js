$(document).ready(function () {
if($(".swiper-container").length > 0) {
	var mySwiper = new Swiper('.swiper-container', {
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

function sliderPrice() {
	var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 1000,
    from = 0,
    to = 0;

$range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 800,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});
}
function sliderWidth() {
	var $range = $(".js-range-slider_width"),
    $inputFrom = $(".js-input-from_width"),
    $inputTo = $(".js-input-to_width"),
    instance,
    min = 0,
    max = 1000,
    from = 0,
    to = 0;

$range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 800,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});
}
function sliderHeight() {
	var $range = $(".js-range-slider_height"),
    $inputFrom = $(".js-input-from_height"),
    $inputTo = $(".js-input-to_height"),
    instance,
    min = 0,
    max = 1000,
    from = 0,
    to = 0;

$range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 800,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});
}
sliderPrice();
sliderWidth();
sliderHeight();
});