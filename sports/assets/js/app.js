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
        $('#intro__inner').addClass('padding');
    });
    
    
//TILE
	
	$elemProductW = $('.product__item').innerWidth();
	$('.product__item').css('height', $elemProductW + 'px');
	
	$elemImgW = $('.images__item').innerWidth();
	$('.images__item').css('height', $elemImgW + 'px');
	
	$elemBrandW = $('.brand__item').innerWidth();
	$('.brand__item').css('height', $elemBrandW + 'px');
	
});