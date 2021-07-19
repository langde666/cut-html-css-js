$(document).ready(function() {
    $('.js-buy-ticket').on('click', function() {
        $('.modal').addClass('open');
    });

    $('.js-close-modal').on('click', function() {
        $('.modal').removeClass('open');
    });

    $('.js-mobile-menu').on('click', function() {
        $('.header').toggleClass('open-mobile-menu');
    });

    $('.js-close-mobile-menu').on('click', function() {
        $('.header').removeClass('open-mobile-menu')
    })
});