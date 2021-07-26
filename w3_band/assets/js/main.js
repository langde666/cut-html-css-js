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


//Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n
    showSlides(slideIndex);
}

function currentSlide(n) {
    showSlides(n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName('slider__wrap');
    var dots = document.getElementsByClassName('dot');

    var slidesLength = slides.length;
    var dotsLenght = dots.length;

    if (n > slidesLength) {
        n = 1;
    }

    if (n < 1) {
        n = slidesLength;
    }

    for (var i=0; i<slidesLength; i++) {
        slides[i].style.display = 'none';
    }

    for (var i=0; i<dotsLenght; i++) {
        dots[i].classList.remove('dot--active');
    }

    slides[n-1].style.display = 'block';
    dots[n-1].classList.add('dot--active');
    slideIndex = n;
}