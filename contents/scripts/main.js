ready = require ('./vendor/ready');
global.$ = require('jquery');
slick = require('slick-carousel-browserify');

ready(function() {
    slick($("#foto-gallery"), {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        arrows: true
    });

    /* exibir mais a imagem da capa */
    /*var headerHeight = $('header').height();
    var imgHeight = $('#imgfundo').height();
    var factor = imgHeight * 0.30;
    var fillSpace = imgHeight - headerHeight - factor;

    $('header').css('margin-bottom', fillSpace);*/
});
