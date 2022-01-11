$(document).ready(function() {
    $('.small-slider-prod').slick({
        slidesToShow: 4,
        speed: 300,
        waitForAnimate: false,
        asNavFor: '.big-slider-prod',
        centerMode: true,
        variableWidth: true,
    });
    $('.big-slider-prod').slick({
        arrows: false,
        slidesToShow: 1,
        speed: 300,
        waitForAnimate: false,
        fade: true,
        asNavFor: '.small-slider-prod'
    });
    $('.small-slider-work').slick({
        slidesToShow: 3,
        speed: 300,
        waitForAnimate: false,
        asNavFor: '.big-slider-work',
        centerMode: true,
        variableWidth: true,
    });
    $('.big-slider-work').slick({
        arrows: false,
        slidesToShow: 1,
        speed: 300,
        waitForAnimate: false,
        fade: true,
        asNavFor: '.small-slider-work'
    });


    $('.slider-attributes').slick({
        slidesToShow: 3,
        speed: 300,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
    });
});