$(function() {
    
    /*HEADER*/
    
    let header = $('#header'); 
    
    $(window).on("scroll load resize", function() {
        
        let introHeight = $('#intro').innerHeight();
        let scrollPos = $(this).scrollTop();
        
        if (scrollPos > introHeight) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
            menu.removeClass('active');
            
        }
        
    })
    
    /*BURGER*/
    
    let burger = $('#burger');
    let menu   = $('#header__nav');
    
    $(burger).on("click", function() {
        menu.toggleClass('active');
    })
    
    /*SLIDER*/
    
    let sliderAbout = $('#sliderAbout');
    
    sliderAbout.slick({
  infinite: true,
  speed: 500,
  cssEase: 'linear'
});
    
});