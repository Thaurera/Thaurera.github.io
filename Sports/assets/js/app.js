//   Menu Burger

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.header__burger--wrap').toggleClass('active');
        $('body').toggleClass('lock');
    });

//   ///Menu Burger
    
//    MAIN
    $(window).one("scroll", function() {
        $('#main').addClass('main');
    });
    
    
//TILE
	
	$elemProductW = $('.product__item').innerWidth();
	$('.product__item').css('height', $elemProductW + 'px');
	
	$elemImgW = $('.images__item').innerWidth();
	$('.images__item').css('height', $elemImgW + 'px');
	
	$elemBrandW = $('.brand__item').innerWidth();
	$('.brand__item').css('height', $elemBrandW + 'px');
	
//    SEARCH
    
    $(".header__search").on("click", function() {
        $(".header__cart, .header__social").toggleClass("active-search");
        $(".header__search-form").toggleClass("active-search");
        
        $(".header__logo").removeClass("active-search");
        $(".header__burger--wrap").removeClass("active-search");
        
        if (screen.width < 580) {
            $(".header__logo").toggleClass("active-search");
        }
        
        if (screen.width < 390) {
            $(".header__burger--wrap").toggleClass("active-search");
        }
        
    });
    
    $(".header__search-form form").on("submit", function() {
        if ($(".header__search-form form input").val() == "") return false;
    });
    
//    LINKS
    
    $("a").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $("#" + elementClick).offset().top;
        $('html, body').animate({ scrollTop: destination }, 600);
        return false;
    });
    
//    TIMER
    
    let hourElem = $('#hour');
    let minuteElem = $('#minute');
    let secondElem = $('#second');
    let daysElem = $('#days');
    
    let endDate = new Date(2020, 6, 30, 18, 0, 0, 0).getTime();
    
    setInterval(function () {
    
        let startDate = new Date().getTime();

        let distance = (endDate - startDate) / 1000;
        
        if (distance >= 0) {

        let day = Math.floor(distance / (60 * 60 * 24));
        let hour = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
        let minute = Math.floor((distance % (60 * 60)) / (60));
        let second = Math.floor(distance % 60);
        
        if(day < 10) {
            day = '0' + day;
        }
        
        if(hour < 10) {
            hour = '0' + hour;
        }
        
        if(minute < 10) {
            minute = '0' + minute;
        }
        
        if(second < 10) {
            second = '0' + second;
        }
        
        daysElem.html(day);
        minuteElem.html(minute);
        secondElem.html(second);
        hourElem.html(hour);
        } else {
            daysElem.html("00");
        minuteElem.html("00");
        secondElem.html("00");
        hourElem.html("00");
        }
            
    }, 1000);
    
//    GALLERY
    
	$('#gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return '<a class="image-source-link" href="'+item.el.attr('href')+'" target="_blank">Открыть в новой вкладке</a>';
			}
		},
		gallery: {
			enabled: true,
            tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
    
});