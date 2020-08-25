//   Menu Burger

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })

    //   ///Menu Burger

    //SLIDER

    $("#slider").slick({
        fade: true,
        prevArrow: '<div class="slider__arrows-prev"><p><</p></div>',
        nextArrow: '<div class="slider__arrows-next"><p>></p></div>'
    });

    //TEXT SUP SLIDER

    $('.slider__arrows-prev, .slider__arrows-next').on('click', function() {
         let textSup = $(".works__sup-slider").text();

        let textSlide = $(".slick-current").attr("data-text-sup");

        if (textSlide == textSup) {
            return false;
        } else {
            $(".works__sup-slider").text(textSlide);
        }
    });
    
//    PARALAX HEADER
    
    $(document).on("scroll", function() {
        let scroll = $(document).scrollTop();
        
        let bottomHeader = $(".header").outerHeight();
        
        if (bottomHeader > scroll) { 
            $(".header").css("background-position-y", scroll * 0.1 + "px");
            $(".header__info").css("top", scroll * -0.08 + "px");
        } else {
            return false;
        }
        
    });

    //SERVICES IMG
    
    $(".services__text").on("mouseenter", function(e) {
        
        let img = $(e.target).prev("img");
        
        let imgWidth = img.innerWidth();
        let itemWidth = img.parent(".services__item").innerWidth();
        
        let imgLeft = -(imgWidth - itemWidth);
        img.css("left", imgLeft + "px");
    });
    
    $(".services__text").on("mouseleave", function(e) {
        let img = $(e.target).prev("img");
        img.css("left", 0 + "px");
    });
    
//    CALLBACK
    
    $(".header__btn").on("click", function() {
        $(".callback").addClass("d-b");
    });
    
    $(".callback__close").on("click", function() {
        $(".callback").removeClass("d-b");
    });
    
//    FORM
    
    $(".callback input[type=\"tel\"], .callback input[type=\"text\"]").on("click input change focusout", function(e) {
        if($(".callback input[type=\"tel\"]").val() == '' || $(".callback input[type=\"text\"]").val() == '') {
            $(".callback input[type=\"submit\"]").prop('disabled', true);
        } else {
            $(".callback input[type=\"submit\"]").prop('disabled', false);
        }
    });
    
    $(".callback input[type=\"tel\"]").bind("change keyup input click", function() {
        
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
        
    });
    
    //    LINKS
    
    $("a").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $("#" + elementClick).offset().top;
        $('html, body').animate({ scrollTop: destination }, 600);
        return false;
    });
    
});


// Plugin: jQuery.scrollSpeed
// Source: github.com/nathco/jQuery.scrollSpeed
// Author: Nathan Rutzky
// Update: 1.0.2

(function($) {
    
    jQuery.scrollSpeed = function(step, speed, easing) {
        
        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = 0,
            scroll = false,
            scrollY,
            scrollX,
            view;
            
        if (window.navigator.msPointerEnabled)
        
            return false;
            
        $window.on('mousewheel DOMMouseScroll', function(e) {
            
            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
                scrollY = $document.height() > $window.height();
                scrollX = $document.width() > $window.width();
                scroll = true;
            
            if (scrollY) {
                
                view = $window.height();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.height() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollTop: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            if (scrollX) {
                
                view = $window.width();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.width() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollLeft: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            return false;
            
        }).on('scroll', function() {
            
            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();
            
        }).on('resize', function() {
            
            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();
            
        });       
    };
    
    jQuery.easing.default = function (x,t,b,c,d) {
    
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
    
})(jQuery);