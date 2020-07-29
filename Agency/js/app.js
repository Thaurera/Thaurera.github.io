//   Menu Burger

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});

//$('#testimonial-slider').slick({
//  autoplay: true,
//  autoplaySpeed: 2000,
//  dots: true
//});

$('#testimonial-slider').slick({ // это изначально slick слайдер для основного блока изображений
        slidesToShow: 1,  // по одному слайдеру 
        slidesToScroll: 1, // по одному менять
        arrows: false, // включение стрелок (если не нужны false)
        asNavFor: '.testimonial__avatars', // указываем что навигация для слайдера будет отдельно (указываем класс куда вешаем навигацию)
		draggable: false,
        swipe: false
    });

    $('.testimonial__avatars').slick({ // настройка навигации
        slidesToShow: 3, // указываем что нужно показывать 3 навигационных изображения
        asNavFor: '#testimonial-slider', // указываем что это навигация для блока выше
        focusOnSelect: true, // указываем что бы слайделось по клику
		draggable: false,
        swipe: false
    });

//LAPTOPE SLIDER

$('#laptope__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
});