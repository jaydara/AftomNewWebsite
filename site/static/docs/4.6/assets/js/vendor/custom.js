$(window).scroll(function () {
    var sticky = $('.header-section'),
            scroll = $(window).scrollTop();

    if (scroll >= 300)
        sticky.addClass('fixed');
    else
        sticky.removeClass('fixed');
});



$(document).ready(function () {
    $('.customer_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,        
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1                    
                }
            }
        ]
    });
    $('.banner_slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false       
    });
});

	