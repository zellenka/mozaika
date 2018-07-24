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
    
    
    
    function mobMenu() {
    
        var x = window.innerWidth;
    
        if (x <= '992') {
           $(".header__top-nav").appendTo(".header__mob-menu-block");
           $(".header__top-nav").hide();
           $(".header__mob-menu-button").click(function () {
            $(".header__top-nav").slideToggle();
        });
        } else {
            $(".header__top-nav").appendTo(".col-md-8.hidden-xs.hidden-sm");
        }
    
    }
    
    
    $(window).resize(function (){
        mobMenu();
    });
   
    
    });
    
    