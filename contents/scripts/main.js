ready = require ('./vendor/ready');
global.$ = require('jquery');
slick = require('slick-carousel-browserify');

ready(function() {
    if (document.querySelector('.foto-gallery')) {
        slick($(".foto-gallery"), {
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            /*adaptiveHeight: true,*/
            arrows: true,
            lazyLoad: 'ondemand'
        });
    }
});
