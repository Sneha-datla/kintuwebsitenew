/* Wow Js */
new WOW().init();

/* ==========================================
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
        $('.main-header').addClass('fixed-header');
    }
    else {
        $('.main-header').removeClass('fixed-header');
    }
});

$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});


var btn = $('#top-button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

/* Company Carousel Js Start */
$('.company-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
/* Company Carousel Js End */

/* Client Carousel Js End */
$('.client-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})
/* Client Carousel Js End */