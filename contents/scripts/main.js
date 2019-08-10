ready = require ('./vendor/ready');
global.$ = require('jquery');
slick = require('slick-carousel-browserify');

ready(function() {
    slick($("#foto-gallery"), {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
});
