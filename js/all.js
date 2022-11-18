$(document).ready(function () {
    $('.showA').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('ul').slideUp();
    });
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 1500,
          },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      $('.scroll a').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0},2000);
      });
});