// veno box goes here====
$(document).ready(function () {
    $('.venobox').venobox(); 
});

// counter up goes here====
 $('.counter').counterUp({     
     delay: 10,     
     time: 2000
 });

$('.banner_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    autoplaySpeed: 2000,
    infinite: true,
    rtl:true,
    arrows: false,
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
});